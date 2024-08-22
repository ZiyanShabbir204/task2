import React from 'react'
import { useParams } from 'react-router-dom'
import { sendEmail, verifyEmail } from '../../api/adminApi'

const VerifyEmail = () => {
    const params = useParams()

    const verifyHandler = async ()=>{
        const response = await verifyEmail(params._id) 
        console.log("verify response",response)
        if(response.success){

            alert(response.message)
            
        }
        else{
            alert(response.response.data.message)
        }

    }

  return (
    <div className="form-div" >
        <div className="login-form">

        <h2>Please Verify your Email by Clicking Button</h2>
        <button onClick={verifyHandler} className="login-btn">Verify</button>
        </div>
        
        </div>
  )
}

export default VerifyEmail