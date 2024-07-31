import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import "../App.css";
import { postTodo } from "../api/jsonApi";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const todo = useSelector((state) => state.todo.todos);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("todo", todo);
    const payload = {
      id: (todo[todo.length - 1] ? todo[todo.length - 1].id : 0) + 1,
      title: title,
      completed: completed,
      description:description
    };
    const response  = await postTodo(payload)
    // console.log("post todo ",response)
    dispatch(addTodo(response));
    setTitle("");
    setDescription("")
    setCompleted(false);
    navigate("/")
  };
  return (
    <div className="form-div">
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
