import axios from "axios";
import { apiInstance } from "./config";

export const signup = async (payload) => {
  try {
    const response = await axios.post("/api/admin/signup", payload);

    return response.data;
  } catch (error) {

    console.log("inside signup api",error.response.data)
    return {error:error.response.data.message}
  }
};
export const login = async (payload) => {
  try {
    const response = await axios.post("/api/admin/login", payload);
    // console.log("token ",response.data.token)
    console.log("login response",response)

    return response.data
  } catch (error) {
    console.log("error",error.response)

   
    return {error: error.response.data.message}
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