import { createSlice } from "@reduxjs/toolkit";

const todoSlice  =  createSlice({
    name: "todo",
    initialState: {todos: []},
    reducers :{
        getTodo(state,action){
            state.todos = action.payload
            console.log("inside reducer",action.payload)

        },
        addTodo(state,action){
           state.todos.push(action.payload)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
        editTodo(state,action){
            state.todos =  state.todos.map(todo => {
                if (todo.id == action.payload.id){
                    return action.payload
                }
                else{
                    return todo
                }
            })
        },
        deleteAll(state,action){
            state.todos = []

        }
    }
    
})

export const {getTodo,addTodo,deleteTodo,editTodo,deleteAll} = todoSlice.actions
export default todoSlice.reducer