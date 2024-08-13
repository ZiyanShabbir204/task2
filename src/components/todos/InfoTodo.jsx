import React, { useEffect, useState } from "react";
import { getTodo } from "../../api/jsonApi";

import { useSelector } from "react-redux";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const InfoTodo = () => {
  const [data, setData] = useState("");
  const _id = useSelector((state) => state.todo.todoKey);
  const params = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.admin.token )

  const dataHandling = async () => {
    const response = await getTodo(token,params._id);
    setData(response);
  };
  useEffect(() => {
    dataHandling();
  }, []);
  return (
    <div className="info-box">
      <div className="info-div">
        <div className="info-action">
          <h1>Title</h1>
          <p
            style={{
              fontSize: "larger",
              maxWidth: "70%",
              wordWrap: "break-word",
            }}
          >
            {data.title}
          </p>
        </div>
        <div className="info-action">
          <h1>Description</h1>
          <p
            style={{
              fontSize: "larger",
              maxWidth: "70%",
              wordWrap: "break-word",
            }}
          >
            {data.description}
          </p>
        </div>
        <div className="info-action">
          <h3>Completed</h3>
          {data.completed ? (
            <FontAwesomeIcon icon={faCheckSquare} aria-hidden="true" />
          ) : (
            <FontAwesomeIcon icon={faSquare} aria-hidden="true" />
          )}
        </div>
        <button onClick={() => navigate("/todo")} className="back-btn">
          back
        </button>
      </div>
    </div>
  );
};

export default InfoTodo;
