import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    token: localStorage.getItem("token"),
    heading: localStorage.getItem("token") ? "Dashboard" : "Login",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setHeading(state, action) {
      state.heading = action.payload;
    },
  },
});

export const { setToken, setHeading } = adminSlice.actions;

export default adminSlice.reducer;
