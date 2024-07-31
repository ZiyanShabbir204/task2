import { createSlice } from "@reduxjs/toolkit";

const todoSlice  =  createSlice({
    name: "todo",
    initialState: {todos: [],todoKey : null},
    reducers :{
        getTodo(state,action){
            state.todos = action.payload
            console.log("inside reducer",action.payload)

        },
        addTodo(state,action){
           state.todos.push(action.payload)
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter(todo => todo._id != action.payload)
        },
        editTodo(state,action){
            state.todos =  state.todos.map(todo => {
                if (todo._id == action.payload._id){
                    return action.payload
                }
                else{
                    return todo
                }
            })
        },
        setTodoKey(state,action){
            state.todoKey = action.payload

        },
        deleteAll(state,action){
            state.todos = []

        }
    }
    
})

export const {getTodo,addTodo,deleteTodo,editTodo,deleteAll,setTodoKey} = todoSlice.actions
export default todoSlice.reducer