import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../store/slices/todoSlice";
import axios from "axios";
import Todo from "./Todo";
import { todos } from "../api/jsonApi";

const Todos = () => {
  const dispatch = useDispatch();
 
  
  const dataHandler = async ()=>{
    const todo  = await todos()
    dispatch(getTodo(todo))
  }

  useEffect(() => {
    dataHandler()
  }, []);


  const todoData = useSelector((state) => state.todo.todos)
  console.log("todos",todoData)
  

  return <div style={{margin:"15px"}}>
    <h1 style={{textAlign:"center",color:"midnightblue"}}>Todos</h1>
    
    {todoData.map(todo => <Todo {...todo} key={todo._id}/>)}


  </div>;
};

export default Todos;
