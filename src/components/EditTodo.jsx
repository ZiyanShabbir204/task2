import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { putApi } from '../api/jsonApi';
import { editTodo } from '../store/slices/todoSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
    
    const data = useSelector((state)=> state.todo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params  = useParams()

    const todo = data.todos.find((todo)=> todo._id == params._id)
    const [title, setTitle] = useState(todo.title);
    const [description,setDescription] = useState(todo.description)
    const [completed, setCompleted] = useState(todo.completed);

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log("todo", todo);
        const payload = {
          id: todo._id,
          title: title,
          completed: completed,
          description:description
        };
        console.log("payload",payload)
        const response = await putApi(params._id,payload)
        console.log("response",response)
        dispatch(editTodo(response))
        navigate("/todo")
        // const response  = await postTodo(payload)
        // console.log("post todo ",response)
        // dispatch(addTodo(response));
        setTitle("");
        setDescription("")
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
      <button onClick={submitHandler} className="add-btn">Change</button>
    </form>
  </div>
  )
}

export default EditTodo