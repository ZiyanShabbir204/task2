import { apiInstance } from "./config";

export const todos = async () => {
  try {
    const response = await apiInstance.get("/todo");
    // console.log("insideapi",response)
    return response.data.todos;
  } catch (error) {
    return error;
  }
};

export const getTodo = async (_id) => {
  try {
    const response = await apiInstance.get(`/todo/${_id}`);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const postTodo = async (payload) => {
  try {
    const response = await apiInstance.post("/todo", payload);
    return response.data.newTodo;
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (_id) => {
  try {
    const response = await apiInstance.delete(`/todo/${_id}`);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const putApi = async (_id, payload) => {
  try {
    const response = await apiInstance.put(`/todo/${_id}`, payload);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const deleteAllApi = async () => {
  try {
    const response = await apiInstance.delete("/todo");
    return response.data.todo.acknowledged;
  } catch (error) {
    return error;
  }
};
