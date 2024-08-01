import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApiUser } from "../../api/userApi";
import { addUser } from "../../store/slices/userSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import "../../App.css";


import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.users);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user", user);
    
    const payload = {
      id: (user[user.length - 1] ? user[user.length - 1].id : 0) + 1,
      name: name,
      email: email,
      username:username
    };
    const response  = await postApiUser(payload)
    // console.log("post user ",response)
    dispatch(addUser(response));
    setName("");
    setUsername("")
    setEmail("")
       navigate("/user")
  };
  return (
    <div className="form-div">
      <form className="form-class">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="add-input"
          placeholder="Name"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="add-input"
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="add-input"
          placeholder="email"
        />


       
        
    
        <button onClick={submitHandler} className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
