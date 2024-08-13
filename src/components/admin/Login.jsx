import React, { useRef } from "react";
import { login } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeading, setToken } from "../../store/slices/adminSlice";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

React.useEffect(()=>{
  console.log('mounted!!!!!!!!!!!1');
})

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email.current.value || !password.current.value) {
      alert("invalid fields");
      return;
    }

    const payload = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await login(payload);
      if (response.error) {
        throw "incorrect email or password";
      }
      console.log("before local storage", response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log("after local storage", localStorage.getItem("token"));
      dispatch(setToken(localStorage.getItem("token")));

      // console.log("login Response", response);?
      alert(response.message);
      email.current.value = "";
      password.current.value = "";
      dispatch(setHeading("Dashboard"));

      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const textHandler = () => {
    dispatch(setHeading("Signup"));
    navigate("/signup");
  };

  return (
    <div className="form-div">
      <form onSubmit={submitHandler} className="login-form">
       
        <div className="form-item">
        <input
          type="email"
          ref={email}
          placeholder="Email"
          className="login-input-field"
        />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="login-input-field"
            style={{marginTop:"25px"}}
          />
          <div style={{ display: "flex", fontSize: "x-small", gap: "3px" }}>
            <p> Don't have an account?</p>
            <p className="form-text" onClick={textHandler}>
              {" "}
              Signup
            </p>
          </div>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
