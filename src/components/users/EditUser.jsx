import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { putUserApi } from '../../api/userApi';
import { editUser } from '../../store/slices/userSlice';

import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    
    const data = useSelector((state)=> state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params  = useParams()

    const user = data.users.find((user)=> user._id == params._id)
    const [name, setName] = useState(user.name);
    const [username,setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email);

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log("user", user);
        const payload = {
          id: user._id,
          name: name,
          email: email,
          username:username
        };
        console.log("payload",payload)
        const response = await putUserApi(params._id,payload)
        console.log("response",response)
        dispatch(editUser(response))
        navigate("/user")
        // const response  = await postUser(payload)
        // console.log("post user ",response)
        // dispatch(addUser(response));
        setName("");
        setUsername("")
        setEmail("")
       
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
        placeholder="Email"
      />


      <button onClick={submitHandler} className="add-btn">Change</button>
    </form>
  </div>
  )
}

export default EditUser