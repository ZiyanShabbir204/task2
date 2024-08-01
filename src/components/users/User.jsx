import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteUser } from "../../store/slices/userSlice";

import {
  faTrash,
  faPencil,
  faCheckSquare as farCheckSquare,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import { useNavigate } from "react-router-dom";
import "../../App.css"
import { deleteUserApi } from "../../api/userApi";

const User = ({ _id, name, email, username }) => {

  const [editField, setEditField] = useState(false);
  const [nameState, setNameState] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const deleteHandler = async () => {
    try {
      const response = await deleteUserApi(_id);
      dispatch(deleteUser(response._id));
    } catch (error) {
      console.log("error while delete a data", error);
    }
  };
  const editHandler = () => {
    // dispatch(setUserKey(_id))
    navigate(`edit/${_id}`)
    // setEditField(true);

    // setNameState(name);
  };

  const infoHandler = () => {
  
    navigate(`info/${_id}`)
  };
  const changeHandler = () => {
    console.log("change handler");
    const payload = {
      _id: _id,
      name: nameState,
      completed: check,
    };

    dispatch(editUser(payload));

    setEditField(false);
  };

  return (
    <div className="todo-card">
      {editField ? (
        <div className="card-item">
          {" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setNameState(e.target.value)}
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
          <h2 style={{ width: "75%" }}>{name}</h2>
          <div className="card-actions">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={deleteHandler}
              aria-hidden="true"
            />

            <FontAwesomeIcon
              icon={faPencil}
              onClick={editHandler}
              aria-hidden="true"
            />
          
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

export default User;
