import axios from "axios";

export const todos = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=10");
    return response.data
  } catch (error) {
    return error
  }
};
