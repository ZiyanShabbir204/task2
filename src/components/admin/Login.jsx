
import React, { useRef } from "react";
import { login } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!username.current.value || !password.current.value ) {
          alert("invalid fields");
          return;
        }
        
        const payload = {
        username: username.current.value,
          password: password.current.value,
        };
        try {
          const response = await login(payload);
          console.log("login Response", response);
          username.current.value = "";
          password.current.value = "";
          
          
        
            // navigate("/navbar");
        
        } catch (error) {
          alert(error);
        }
      };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={username} placeholder="Username" />
        <input type="password" ref={password} placeholder="Password" />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
