import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../store/slices/todoSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteApi } from "../api/jsonApi";
import { faEllipsisV, faSignOut,faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setHeading, setToken } from "../store/slices/adminSlice";

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navContent, setNavContent] = useState(false);
  const [settingContent, setSettingContent] = useState(false);
  const [_id,setId] = useState("")
  
  // const [token,setToken] = useState("")
  const data = useSelector((state) => state.admin);
  const settingHandler = ()=>{
    console.log("setting",settingContent)
    setSettingContent(!settingContent)
    const arrayToken = data.token.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    // console.log("token payload",tokenPayload)
    setId(tokenPayload.userId)
  }


  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(setToken(localStorage.getItem("token")))
    
    dispatch(setHeading("Login"));

    setTimeout(() => navigate("/login"), 0);
  };
  return (
    <div className="navbar">
      <h1 style={{ marginLeft: "25px" }}>{data.heading}</h1>
      <div className="nav-link-wrapper">
        {data.token && (
          <>
            <Link to="/todo" className="nav-links">
              Todos
            </Link>
            <Link to="/user" className="nav-links">
              Users
            </Link>
          </>
        )}
     

      </div>
      {data.token && (
        <div style={{display:"flex",
          gap:"10px"
        }}>
           <FontAwesomeIcon
          icon={faGear}
          className="logout-btn"
          onClick={settingHandler}
        />
        <div  className="setting-btn-content"
          style={{ display: settingContent ? "flex" : "none" }}>
            <>
              <Link to={`admin/changepassword/${_id}`} className="nav-links">
                Change Password
              </Link>
              <Link to={`admin/updateprofile/${_id}`} className="nav-links">
                Update Profile
              </Link>
            </>

            </div>

           <FontAwesomeIcon
          icon={faSignOut}
          className="logout-btn"
          onClick={logoutHandler}
        />
  
        
        </div>
       
      )}
  

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
          {data.token ? (
            <>
              <Link to="/todo" className="nav-links">
                Todos
              </Link>
              <Link to="/user" className="nav-links">
                Users
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-links">
                Login
              </Link>
              <Link to="/signup" className="nav-links">
                Signup
              </Link>
            </>
          )}
          <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
