import React, { useEffect, useState } from "react";
import { getTodo } from "../api/jsonApi";
import { useSelector } from "react-redux";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const InfoTodo = () => {
  const [data, setData] = useState("");
  const _id = useSelector((state) => state.todo.todoKey);
  const params = useParams()
  const navigate = useNavigate()

  const dataHandling = async () => {
    const response = await getTodo(params._id);
    setData(response);
  };
  useEffect(() => {
    dataHandling();
  }, []);
  return (
    <div className="info-box">
        <div className="info-div">
        <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div style={{display:"flex" ,alignItems:"center",gap:"10px"}}>
        <h3>Completed</h3>
        {data.completed ? (
          <FontAwesomeIcon icon={faCheckSquare} aria-hidden="true" />
        ) : (
          <FontAwesomeIcon icon={faSquare} aria-hidden="true" />
        )}
      </div>
      <button onClick={()=> navigate("/todo")} className="back-btn">back</button>

        </div>

    
    </div>
  );
};

export default InfoTodo;
