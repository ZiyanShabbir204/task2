import axios from "axios";
import { apiInstance } from "./config";

export const signup = async (payload) => {
  try {
    const response = await axios.post("/api/admin/signup", payload);

    return response.data;
  } catch (error) {
    return error

  }
};
export const login = async (payload) => {
  try {
    const response = await axios.post("/api/admin/login", payload);
    console.log("login response",response)

    return response.data
  } catch (error) {
    console.log("error",error.response)

    return error
  }
};

export const changePassword = async(token,_id,payload)=>{
  try {
    const response = await apiInstance(token).put(`/admin/changepassword/${_id}`,payload)
    return response.data;
  } catch (error) {
    return error
    
  }
}
export const updateProfile = async(token,_id,payload)=>{
  try {
    const response = await apiInstance(token).put(`/admin/updateprofile/${_id}`,payload)
    return response.data;
  } catch (error) {
    return error
    
  }
}

export const sendEmail = async (payload)=>{
  try {
    const response = await axios.post("/api/admin/sendemail",payload)
    return response.data
  } catch (error) {
    return error
  }
}

export const verifyEmail = async (_id) =>{
  try {
    const response = await axios.put(`/api/admin/verifyemail/${_id}`)
    return response.data
  } catch (error) {
    return error
    
  }
}