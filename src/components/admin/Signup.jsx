import React, { useRef } from "react";
import { sendEmail, signup } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeading, setToken } from "../../store/slices/adminSlice";

const Signup = () => {
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !fullname.current.value ||
      !email.current.value ||
      !password.current.value ||
      !confirmPassword.current.value
    ) {
      alert("invalid fields");
      return;
    }
    console.log("password", fullname.current.value);
    console.log("confirm", email.current.value);
    if (password.current.value !== confirmPassword.current.value) {
      alert("password dont match");
      return;
    }
    const payload = {
      fullname: fullname.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    const response = await signup(payload);
    if(response.success){
      console.log("signup Response", response);
      const res = await sendEmail(response.data)
      if(!res.success){
        alert(res.response.data.message)
        return
      }
      alert(response.message + res.message);
      fullname.current.value = "";
      email.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";
      dispatch(setHeading("Login"))
      navigate("/login");
    }
    else{
      alert(response.response.data.message);

    }
    // try {
    //   const response = await signup(payload);
    //   if (response.error) {
    //     console.log("response error", response.error);
    //     throw response.error;
    //   }
    //   console.log("signup Response", response);
    //   const res = await sendEmail(payload)
    //   if(!res.success){
    //     alert(res.response.data.message)
    //     return
    //   }
    //   alert(response.message + res.message);
    //   fullname.current.value = "";
    //   email.current.value = "";
    //   password.current.value = "";
    //   confirmPassword.current.value = "";
    //   dispatch(setHeading("Login"))
      

    //   navigate("/login");
    // } catch (error) {
    //   alert(error);
    // }
  };
  const textHandler = ()=>{
    dispatch(setHeading("Login"))
    navigate("/login")

  }
  return (
    <div className="form-div">
      <form onSubmit={submitHandler} className="login-form" >
       
          <input type="text" ref={fullname} placeholder="Fullname"  className="login-input-field"/>
          <input type="email" ref={email} placeholder="Email" className="login-input-field"/>
          <input type="password" ref={password} placeholder="Password" className="login-input-field" />
          <div className="form-item" >
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm Password"
            className="login-input-field"
          />
          <div style={{display:"flex",fontSize:"x-small",gap:"3px"}}>
            <p> Already have an account?</p>
            <p className="form-text" onClick={textHandler}> Login</p>
          </div>
       
        </div>

        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
