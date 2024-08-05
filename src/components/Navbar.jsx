import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../store/slices/todoSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteApi } from "../api/jsonApi";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [navContent, setNavContent] = useState(false);

  const deleteHandler = async () => {
    try {
      const response = await deleteApi(_id);
      if (response.acknowledged) {
        dispatch(deleteAll());
      }
    } catch (error) {}
  };
  return (
    <div className="navbar">
      <h1 style={{ marginLeft: "25px" }}>Dashboard</h1>
      <div className="nav-link-wrapper">
        <Link to="/todo" className="nav-links">
          Todos
        </Link>
        <Link to="/user" className="nav-links">
          Users
        </Link>

        {/* <button className='deleteAll-btn' onClick={()=> navigate("add")}> Add Todo</button>
        <button className='deleteAll-btn' onClick={deleteHandler}> Delete All</button> */}
      </div>
   
      <div className="nav-btn">
        <FontAwesomeIcon
          icon={faEllipsisV}
          aria-hidden="true"
          color="black"
          onClick={() => setNavContent(!navContent)}
          // className="nav-btn"
        />
        <div
          className="nav-btn-content"
          style={{ display: navContent ? "flex" : "none" }}
        >
          <Link to="/todo" className="nav-links">
            Todos
          </Link>
          <Link to="/user" className="nav-links">
            Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
