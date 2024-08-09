import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { deleteAll } from "../store/slices/todoSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteApi } from "../api/jsonApi";
import { faEllipsisV,faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setToken } from "../store/slices/adminSlice";
const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [navContent, setNavContent] = useState(false);
  // const [token,setToken] = useState("")
  const headerToken = useSelector(state => state.admin.token)
  

  // useEffect(()=>{
  //   const headerToken = localStorage.getItem("token")
  //   setToken(headerToken)
  // })

  const deleteHandler = async () => {
    try {
      const response = await deleteApi(_id);
      if (response.acknowledged) {
        dispatch(deleteAll());
      }
    } catch (error) {}
  };

  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    dispatch(setToken(localStorage.getItem("token")))

    navigate("/")
  }
  return (
    <div className="navbar">
      <h1 style={{ marginLeft: "25px" }}>Dashboard</h1>
      <div className="nav-link-wrapper">
        {headerToken ? <>
          <Link to="/todo" className="nav-links">
          Todos
        </Link>
        <Link to="/user" className="nav-links">
          Users
        </Link>
        </> : <>
        <Link to="/login" className="nav-links">
          Login
        </Link>
        <Link to="/signup" className="nav-links">
          Signup
        </Link>
        </>}
       

        {/* <button className='deleteAll-btn' onClick={()=> navigate("add")}> Add Todo</button>
        <button className='deleteAll-btn' onClick={deleteHandler}> Delete All</button> */}
      </div>
      <FontAwesomeIcon icon={faSignOut} className="logout-btn" onClick={logoutHandler}/>
    

   
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
          
          {headerToken ? <>
          <Link to="/todo" className="nav-links">
          Todos
        </Link>
        <Link to="/user" className="nav-links">
          Users
        </Link>
        </> : <>
        <Link to="/login" className="nav-links">
          Login
        </Link>
        <Link to="/signup" className="nav-links">
          Signup
        </Link>

        </>
        
        }
         <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
