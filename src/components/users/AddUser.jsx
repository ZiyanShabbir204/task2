import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApiUser } from "../../api/userApi";
import { addUser } from "../../store/slices/userSlice";

import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

import { useNavigate } from "react-router-dom";
import CustomModal from "../CustomModal";

const AddUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modalText, setModalText] = useState({
    description:"",
    success:true
  });
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.users);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user", user);
    if (!name || !email || !username) {
      setModalText({description: "Invalid Fields",success:false});
      setVisible(true);
      return;
    }

    const payload = {
      id: (user[user.length - 1] ? user[user.length - 1].id : 0) + 1,
      name: name,
      email: email,
      username: username,
    };
    const response = await postApiUser(payload);
    // console.log("post user ",response)
    dispatch(addUser(response));
    setModalText({description: "User Added",success:true});

    setVisible(true);

  };

  useEffect(()=> {
   if (username && name && email) {
      
      setName("");
      setUsername("");
      setEmail("");
      }
  },[visible])


  // const closeModal = () => {
  //   setVisible(false);

  //   if (username && name && email) {
  //     navigate("/user");
  //     setName("");
  //     setUsername("");
  //     setEmail("");
  //   }
  // };
  return (
    <div className="form-div">
      <CustomModal value = {modalText} visible={visible} setVisible={setVisible} component = "User"/>
   
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

        <button onClick={submitHandler} className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
