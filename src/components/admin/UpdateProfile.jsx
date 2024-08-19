import React, { useRef } from 'react'
import {  updateProfile } from '../../api/adminApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {

    const fullname = useRef()
    const email = useRef()
    const params = useParams()
    const token =  useSelector((state) => state.admin.token)
    const navigate = useNavigate()

    const submitHandler = async (e)=>{
        e.preventDefault()
      
        const payload = {
            fullname : fullname.current.value,
            email : email.current.value
        }
        const response = await updateProfile(token,params._id,payload)
        if(response.success){
            alert(response.message)
            fullname.current.value = ""
            email.current.value = ""
            navigate("/")
            return

        }
        else{
            alert(response.response.data.message)
        
        }
      
       
        
    }
  return (
    <div className="form-div">
    <form onSubmit={submitHandler} className="login-form" >
     
        <input type="text" ref={fullname} placeholder="fullname"  className="login-input-field"/>
        <input type="text" ref={email} placeholder="new password" className="login-input-field"/>
             <button type="submit" className="login-btn">
        Update
      </button>
    </form>
  </div>
  )
}

export default UpdateProfile