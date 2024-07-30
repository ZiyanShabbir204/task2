import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import "../App.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("todo", todo);
    const payload = {
      id: (todo[todo.length - 1] ? todo[todo.length - 1].id : 0) + 1,
      title: title,
      completed: completed,
    };
    dispatch(addTodo(payload));
    setTitle("");
    setCompleted(false);
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
