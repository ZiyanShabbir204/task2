import axios from "axios";

export const todos = async () => {
  try {
    const response = await axios.get("/api/todo");
    // console.log("insideapi",response)
    return response.data.todos;
  } catch (error) {
    return error;
  }
};

export const getTodo = async (_id) => {
  try {
    const response = await axios.get(`/api/todo/${_id}`);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const postTodo = async (payload) => {
  try {
    const response = await axios.post("/api/todo", payload);
    return response.data.newTodo;
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (_id) => {
  try {
    const response = await axios.delete(`/api/todo/${_id}`);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const putApi = async (_id, payload) => {
  try {
    const response = await axios.put(`/api/todo/${_id}`, payload);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const deleteAllApi = async () => {
  try {
    const response = await axios.delete("/api/todo");
    return response.data.todo.acknowledged;
  } catch (error) {
    return error;
  }
};
