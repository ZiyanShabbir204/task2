import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";
import adminSlice from "./slices/adminSlice";

const store  = configureStore({
    reducer : {
        todo : todoSlice,
        user : userSlice,
        admin : adminSlice
    }
})

export default store