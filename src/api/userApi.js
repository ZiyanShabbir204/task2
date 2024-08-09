import { apiInstance } from "./config";

export const getAllUser = async () => {
  try {
    const response = await apiInstance.get("/user");
    return response.data.users;
  } catch (error) {
    return { error: error };
  }
};

export const getApiUser = async (_id) => {
  try {
    const response = await apiInstance.get(`/user/${_id}`);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const postApiUser = async (payload) => {
  try {
    const response = await apiInstance.post("/user", payload);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteUserApi = async (_id) => {
  try {
    const response = await apiInstance.delete(`/user/${_id}`);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const putUserApi = async (_id, payload) => {
  try {
    const response = await apiInstance.put(`/user/${_id}`, payload);
    return response.data.user;
  } catch (error) {
    return error;
  }
};

export const deleteAllUserApi = async () => {
  try {
    const response = await apiInstance.delete("/user");
    return response.data.user.acknowledged;
  } catch (error) {
    return error;
  }
};
