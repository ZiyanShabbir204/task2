import React, { useRef } from 'react'
import { changePassword } from '../../api/adminApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ChangePassword = () => {

    const password = useRef()
    const newPassword = useRef()
    const confirmPassword = useRef()
    const params = useParams()
    const token =  useSelector((state) => state.admin.token)
    const navigate = useNavigate()

    const submitHandler = async (e)=>{
        e.preventDefault()
       
        if(confirmPassword.current.value != newPassword.current.value){
            alert("password and confirm password donot match")
            return
        }
        const payload = {
            password : password.current.value,
            newPassword : newPassword.current.value
        }
        const response = await changePassword(token,params._id,payload)
        if(response.success){
            alert(response.message)
            password.current.value = ""
            newPassword.current.value = ""
            confirmPassword.current.value = ""
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
     
        <input type="password" ref={password} placeholder="password"  className="login-input-field"/>
        <input type="password" ref={newPassword} placeholder="new password" className="login-input-field"/>
        <input type="password" ref={confirmPassword} placeholder="confirm password" className="login-input-field" />
      

      <button type="submit" className="login-btn">
        change
      </button>
    </form>
  </div>
  )
}

export default ChangePassword