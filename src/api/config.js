import axios from "axios";

// const token =  localStorage.getItem("token")

// export const apiInstance = axios.create({
//   baseURL: "/api",
//   headers: { Authorization: `bearer ${token}` }

// })

export const apiInstance = (token) =>
  axios.create({
    baseURL: "/api",
    headers: { Authorization: `bearer ${token}` },
  });
