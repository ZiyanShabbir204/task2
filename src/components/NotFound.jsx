import React from 'react'
import notFoundImage from '../assets/404-error.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate()
  return (
    <div style={{ textAlign: 'center' }}>
      <div className='not-found-header'>
      <FontAwesomeIcon icon={faArrowLeft}  style={{marginLeft:"10px"}} onClick={()=>navigate("/")}/>
      <h2>Page Not Found</h2>
      <h1></h1>

      </div>
      
      <img src={notFoundImage} alt="404 Not Found" style={{ width: '50%', height: 'auto' }} />
      
      
    </div>
  )
}

export default NotFound