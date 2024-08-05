import { createSlice } from "@reduxjs/toolkit";

const userSlice  =  createSlice({
    name: "user",
    initialState: {users: [],loader: true},
    reducers :{
        getUser(state,action){
            state.users = action.payload
            console.log("inside user reducer",action.payload)

        },
        setLoader(state,action){
            state.loader = action.payload
        },
        addUser(state,action){
           state.users.push(action.payload)
        },
        deleteUser(state,action){
            state.users = state.users.filter(user => user._id != action.payload)
        },
        editUser(state,action){
            state.users =  state.users.map(user => {
                if (user._id == action.payload._id){
                    return action.payload
                }
                else{
                    return user
                }
            })
        },
        setUserKey(state,action){
            state.userKey = action.payload

        },
        deleteAllUser(state,action){
            state.users = []

        }
    }
    
})

export const {getUser,addUser,deleteUser,editUser,deleteAllUser,setUserKey,setLoader} = userSlice.actions
export default userSlice.reducer