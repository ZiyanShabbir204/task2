import { apiInstance } from "./config";

export const getAllUser = async (token) => {
  try {
    const response = await apiInstance(token).get("/users");
    
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getApiUser = async (token,_id) => {
  try {
    const response = await apiInstance(token).get(`/users/${_id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const postApiUser = async (token,payload) => {
  try {
    const response = await apiInstance(token).post("/users", payload);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteUserApi = async (token,_id) => {
  try {
    const response = await apiInstance(token).delete(`/users/${_id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const putUserApi = async (token,_id, payload) => {
  try {
    const response = await apiInstance(token).put(`/users/${_id}`, payload);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteAllUserApi = async (token) => {
  try {
    const response = await apiInstance(token).delete("/users");
    return response.data.data.acknowledged;
  } catch (error) {
    return error;
  }
};
