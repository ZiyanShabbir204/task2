import { apiInstance } from "./config";

export const todos = async (token) => {
  try {
    const response = await apiInstance(token).get("/todos");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getTodo = async (token,_id) => {
  try {
    const response = await apiInstance(token).get(`/todos/${_id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const postTodo = async (token,payload) => {
  try {
    const response = await apiInstance(token).post("/todos", payload);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (token,_id) => {
  try {
    const response = await apiInstance(token).delete(`/todos/${_id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const putApi = async (token,_id, payload) => {
  try {
    const response = await apiInstance(token).put(`/todos/${_id}`, payload);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const deleteAllApi = async (token) => {
  try {
    const response = await apiInstance(token).delete("/todos");
    return response.data.data.acknowledged;
  } catch (error) {
    return error;
  }
};
