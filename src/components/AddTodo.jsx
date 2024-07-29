import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("todo",todo)
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
    <div>
      <form>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          completed
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </label>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
