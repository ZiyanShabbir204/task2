
import React, { useRef } from "react";
import { login } from "../../api/adminApi";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!email.current.value || !password.current.value ) {
          alert("invalid fields");
          return;
        }
        
        const payload = {
        email: email.current.value,
          password: password.current.value,
        };
        try {
          const response = await login(payload);
          if(response.admin.error){
            throw "incorrect email or password"
          }
           localStorage.setItem("token", response.token);

          console.log("login Response", response);
          email.current.value = "";
          password.current.value = "";
          // props.setToken(localStorage.getItem("token"))
          
          
        
            navigate("/");
        
        } catch (error) {
          alert(error);
        }
      };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
