import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";
import CustomModal from "../CustomModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import "../../App.css";
import { postTodo } from "../../api/jsonApi";

import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [completed, setCompleted] = useState(false);
  const [modalText, setModalText] = useState({
    description:"",
    success:true
  });
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const todo = useSelector((state) => state.todo.todos);
  const token = useSelector((state) => state.admin.token )

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("todo", todo);
    if (!title || !description) {
      setModalText({description: "Invalid Fields",success:false});
      setVisible(true);
      return;
    }
    const payload = {
      id: (todo[todo.length - 1] ? todo[todo.length - 1].id : 0) + 1,
      title: title,
      completed: completed,
      description:description
    };
    const response  = await postTodo(token,payload)
    // console.log("post todo ",response)
    dispatch(addTodo(response));
    setModalText({description: "Todo Added",success:true});
    setVisible(true);

  
  };
  useEffect(()=> {
    if (title  && description) {
       
      setTitle("");
      setDescription("")
      setCompleted(false);
       }
   },[visible])
  return (
    <div className="form-div">
      <CustomModal value = {modalText} visible={visible} setVisible={setVisible} component = "Todo" />                   
      <form className="form-class">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-input"
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="add-input"
          placeholder="Description"
        />

        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          Completed
          {completed ? (
            <FontAwesomeIcon
              icon={faCheckSquare}
              onClick={() => setCompleted(!completed)}
              aria-hidden="true"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setCompleted(!completed)}
              icon={faSquare}
              aria-hidden="true"
            />
          )}
        
        </label>
        <button onClick={submitHandler} className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
