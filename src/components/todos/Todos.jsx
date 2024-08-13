import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo,deleteAll,setLoader } from "../../store/slices/todoSlice";
import axios from "axios";
import Todo from "./Todo";
import { todos,deleteApi, deleteAllApi } from "../../api/jsonApi";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../DeleteModal";
import Spinner from "../Spinner";

const Todos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [visible,setVisible] = useState(false)
  const todoData = useSelector((state) => state.todo.todos);
  const loader = useSelector((state)=> state.todo.loader)
  const token = useSelector((state)=> state.admin.token)

    const deleteHandler = async () => {
      setVisible(false)
      try {
        const response = await deleteAllApi(token);
    
        if (response) {
          dispatch(deleteAll());
        }
      } catch (error) {}
    };
  const dataHandler = async () => {
    const todo = await todos(token);
    console.log("todo in datahandler",todo)
    if(todo.success){
      dispatch(getTodo(todo.data));
        dispatch(setLoader(false))

    }
    else{
      dispatch(getTodo([]));

    }

   
  };

  useEffect(() => {
    dataHandler();
  }, []);

 
  
  return (
    <div style={{ margin: "15px" }}>
      {/* {console.log("loader!!!!!!!!!!1", loader)}
      {console.log("todos!!!!!!!!!!!", todoData)} */}
      <DeleteModal  description= "Delete All" visible={visible} setVisible={setVisible} deleteHandler={deleteHandler}/>
      <div  className="topbar">
        <h1 style={{ textAlign: "center", color: "midnightblue" }}>Todos</h1>
        <div className="topbar-content" >
        <button className="deleteAll-btn" onClick={() => navigate("/todo/add")}>
          {" "}
          Add Todo
        </button>
        <button className="deleteAll-btn" style={{background:"#f12b2b"}}  onClick={()=> setVisible(true)}>
          {" "}
          Delete All
        </button>

        </div>
       

      </div>
      {loader? <Spinner/> : todoData.map((todo) => (
        <Todo {...todo} key={todo._id} />
      ))}

      
    </div>
  );
};

export default Todos;
