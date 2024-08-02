import React from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../store/slices/todoSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteApi } from "../api/jsonApi";

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      <h1 style={{marginLeft:"25px"}}>DashBoard</h1>
      <div className="nav-link-wrapper">
        <Link to="/todo" className="nav-links" >Todos</Link>
        <Link to="/user"  className="nav-links">Users</Link>
        {/* <button className='deleteAll-btn' onClick={()=> navigate("add")}> Add Todo</button>
        <button className='deleteAll-btn' onClick={deleteHandler}> Delete All</button> */}
      </div>
    </div>
  );
};

export default Navbar;
