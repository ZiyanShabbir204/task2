import { createSlice } from "@reduxjs/toolkit";

const adminSlice =  createSlice({
    name : "admin",
    initialState : {token:localStorage.getItem("token")},
    reducers : {
        setToken(state,action){
            state.token = action.payload
        }
    }

})

export const {setToken} =  adminSlice.actions

export default adminSlice.reducer