import React, { useRef } from "react";
import { signup } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const fullname = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!fullname.current.value || !username.current.value || !password.current.value || !confirmPassword.current.value) {
      alert("invalid fields");
      return;
    }
    console.log("password", fullname.current.value);
    console.log("confirm", username.current.value);
    if (password.current.value !== confirmPassword.current.value) {
      alert("password dont match");
      return;
    }
    const payload = {
      fullname: fullname.current.value,
      username: username.current.value,
      password: password.current.value,
    };
    try {
      const response = await signup(payload);
      console.log("signup Response", response);
      fullname.current.value = "";
      username.current.value = "";
      password.current.value = "";
      confirmPassword.current.value = "";
    
        navigate("/navbar");
    
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={fullname} placeholder="Fullname" />
        <input type="text" ref={username} placeholder="Username" />
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
