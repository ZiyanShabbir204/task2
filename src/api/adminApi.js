import axios from "axios";

export const signup = async (payload) => {
  try {
    const response = await axios.post("/api/admin/signup", payload);

    return response.data.admin;
  } catch (error) {
    return error;
  }
};
export const login = async (payload) => {
  try {
    const response = await axios.post("/api/admin/login", payload);
    return response.data.admin
  } catch (error) {
    return error;
  }
};
