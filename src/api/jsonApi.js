import axios from "axios";

export const todos = async () => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.get("/api/todo",config);
    // console.log("insideapi",response)
    return response.data.todos;
  } catch (error) {
    return error;
  }
};

export const getTodo = async (_id) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.get(`/api/todo/${_id}`,config);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const postTodo = async (payload) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.post("/api/todo", payload,config);
    return response.data.newTodo;
  } catch (error) {
    return error;
  }
};

export const deleteApi = async (_id) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.delete(`/api/todo/${_id}`,config);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const putApi = async (_id, payload) => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.put(`/api/todo/${_id}`, payload,config);
    return response.data.todo;
  } catch (error) {
    return error;
  }
};

export const deleteAllApi = async () => {
  try {
    const token =  localStorage.getItem("token")
    const config = {
      headers: { Authorization: `bearer ${token}` }
    };
    const response = await axios.delete("/api/todo",config);
    return response.data.todo.acknowledged;
  } catch (error) {
    return error;
  }
};
