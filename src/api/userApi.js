import axios from "axios";

export const getAllUser = async () => {
  try {
    const response = await axios.get("/api/user");
    // console.log("insideapi",response)
    return response.data.users;
  } catch (error) {
    return error;
  }
};

export const getApiUser = async (_id) => {
  try {
    const response = await axios.get(`/api/user/${_id}`);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const postApiUser = async (payload) => {
  try {
    const response = await axios.post("/api/user", payload);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteUserApi = async (_id) => {
  try {
    const response = await axios.delete(`/api/user/${_id}`);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const putUserApi = async (_id, payload) => {
  try {
    const response = await axios.put(`/api/user/${_id}`, payload);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteAllUserApi = async () => {
  try {
    const response = await axios.delete("/api/user");
    return response.data.user.acknowledged;
  } catch (error) {
    return error;
  }
};
