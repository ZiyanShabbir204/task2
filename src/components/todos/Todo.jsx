import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";

import { deleteTodo, editTodo, setTodoKey } from "../../store/slices/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencil,
  faCheckSquare as farCheckSquare,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import { deleteApi } from "../../api/jsonApi";
import { useNavigate } from "react-router-dom";
import "../../App.css"

const Todo = ({ _id, title, completed }) => {
  const [check, setCheck] = useState(completed);
  const [editField, setEditField] = useState(false);
  const [titleState, setTitleState] = useState();
  const [visible,setVisible] = useState(false)
  const token = useSelector((state)=> state.admin.token)
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const deleteHandler = async () => {
    setVisible(true)
    try {
      const response = await deleteApi(token,_id);
      dispatch(deleteTodo(response._id));
    } catch (error) {
      console.log("error while delete a data", error);
    }
  };
  const editHandler = () => {
    // dispatch(setTodoKey(_id))
    navigate(`edit/${_id}`)
    // setEditField(true);

    // setTitleState(title);
  };

  const infoHandler = () => {
    dispatch(setTodoKey(_id));
    navigate(`info/${_id}`)
  };
  const changeHandler = () => {
    console.log("change handler");
    const payload = {
      _id: _id,
      title: titleState,
      completed: check,
    };

    dispatch(editTodo(payload));

    setEditField(false);
  };

  return (
    <div className="todo-card">
      <DeleteModal visible={visible} setVisible={setVisible} description={title} deleteHandler={deleteHandler}/>
      {editField ? (
        <div className="card-item">
          {" "}
          <input
            type="text"
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
            className="input-field"
          />
          <div
            style={{ display: "flex", width: "25%", justifyContent: "center" }}
          >
            <button onClick={changeHandler} className="chng-btn">
              Update
            </button>
          </div>
        </div>
      ) : (
        <div className="card-item">
          <h2 style={{ width: "75%" }}>{title}</h2>
          <div className="card-actions">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={()=> setVisible(true)}
              aria-hidden="true"
            />

            <FontAwesomeIcon
              icon={faPencil}
              onClick={editHandler}
              aria-hidden="true"
            />
            {check ? (
              <FontAwesomeIcon
                icon={farCheckSquare}
                onClick={() => setCheck(!check)}
                aria-hidden="true"
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setCheck(!check)}
                icon={faSquare}
                aria-hidden="true"
              />
            )}
            <FontAwesomeIcon
              icon={faInfoCircle}
              onClick={infoHandler}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
