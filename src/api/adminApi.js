import axios from "axios";

export const signup = async (payload) => {
  try {
    const response = await axios.post("/api/admin/signup", payload);

    return response.data.admin;
  } catch (error) {

    console.log("inside signup api",error.response.data)
    return {error: error.response.data.error}
  }
};
export const login = async (payload) => {
  try {
    const response = await axios.post("/api/admin/login", payload);
    // console.log("token ",response.data.token)
    return response.data
  } catch (error) {
   
    return {error: error.response.data.error}
  }
};
