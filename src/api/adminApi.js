import axios from "axios";

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
    // console.log("login response",response.data)
    return response.data
  } catch (error) {
    console.log("error",error.response)

   
    return {error: error.response.data.message}
  }
};
