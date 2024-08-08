import axios from "axios";

export const getAllUser = async () => {

  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.get("/api/user",config);
    // console.log("insideapi",response)
    return response.data.users;
  } catch (error) {
    return {error:error};
  }
};

export const getApiUser = async (_id) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.get(`/api/user/${_id}`,config);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const postApiUser = async (payload) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.post("/api/user", payload,config);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteUserApi = async (_id) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.delete(`/api/user/${_id}`,config);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const putUserApi = async (_id, payload) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.put(`/api/user/${_id}`, payload,config);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteAllUserApi = async () => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.delete("/api/user",config);
    return response.data.user.acknowledged;
  } catch (error) {
    return error;
  }
};
