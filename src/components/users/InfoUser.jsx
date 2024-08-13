import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { getApiUser } from "../../api/userApi";

const InfoUser = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.admin.token )


  const dataHandling = async () => {
    const response = await getApiUser(token,params._id);
    setData(response);
  };
  useEffect(() => {
    dataHandling();
  }, []);
  return (
    <div className="info-box">
      <div className="info-div">
        <div className="info-action">
            <h1>Name</h1>
            <p style={{fontSize:"larger" , maxWidth:"70%", wordWrap:"break-word"}}>{data.name}</p>
            
        </div>
        <div className="info-action">
            <h1>Username</h1>
            <p style={{fontSize:"larger" , maxWidth:"70%", wordWrap:"break-word"}}>{data.username}</p>
            
        </div>
        <div className="info-action">
            <h1 style={{maxWidth:"30%"}}>Email</h1>
            <p style={{fontSize:"larger", maxWidth:"70%", wordWrap:"break-word"}}>{data.email}</p>
            
        </div>
        
        
       

        <button onClick={() => navigate("/user")} className="back-btn">
          back
        </button>
      </div>
    </div>
  );
};

export default InfoUser;
