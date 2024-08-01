import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo,deleteAll } from "../../store/slices/todoSlice";
import axios from "axios";
import Todo from "./Todo";
import { todos,deleteApi, deleteAllApi } from "../../api/jsonApi";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


    const deleteHandler = async () => {
      try {
        const response = await deleteAllApi();
    
        if (response) {
          dispatch(deleteAll());
        }
      } catch (error) {}
    };
  const dataHandler = async () => {
    const todo = await todos();
    dispatch(getTodo(todo));
  };

  useEffect(() => {
    dataHandler();
  }, []);

  const todoData = useSelector((state) => state.todo.todos);
  console.log("todos", todoData);

  return (
    <div style={{ margin: "15px" }}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h1 style={{ textAlign: "center", color: "midnightblue" }}>Todos</h1>
        <div style={{display:"flex",gap:"40px"}}>
        <button className="deleteAll-btn" onClick={() => navigate("/todo/add")}>
          {" "}
          Add Todo
        </button>
        <button className="deleteAll-btn" style={{background:"#f12b2b"}}  onClick={deleteHandler}>
          {" "}
          Delete All
        </button>

        </div>
       

      </div>

      {todoData.map((todo) => (
        <Todo {...todo} key={todo._id} />
      ))}
    </div>
  );
};

export default Todos;
