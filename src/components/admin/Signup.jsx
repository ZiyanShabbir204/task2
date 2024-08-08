import React, { useRef } from "react";
import { signup } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!fullname.current.value || !email.current.value || !password.current.value || !confirmPassword.current.value) {
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
    try {
      const response = await signup(payload);
      if(response.error){
        console.log("response error",response.error)
        throw response.error
      }
      console.log("signup Response", response);
      fullname.current.value = "";
      email.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";
    
        navigate("/login");
    
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={fullname} placeholder="Fullname" />
        <input type="email" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
        <input
          type="password"
          ref={confirmPassword}
          placeholder="Confirm Password"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
