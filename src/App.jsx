import { useState } from "react";

import Todos from "./components/todos/Todos";
import Users from "./components/users/Users";

import "./App.css";
import AddTodo from "./components/todos/AddTodo";

import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InfoTodo from "./components/todos/InfoTodo";
import TodoWrapper from "./components/todos/TodoWrapper";
import AddUser from "./components/users/AddUser";
import EditTodo from "./components/todos/EditTodo";
import NavbarWrapper from "./components/NavbarWrapper";
import EditUser from "./components/users/EditUser";
import InfoUser from "./components/users/InfoUser";
import Signup from "./components/admin/Signup.jsx";
import Login from "./components/admin/Login.jsx";



function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <Login/>
    },
    {
      path:"/navbar",
      element: <NavbarWrapper/>,
      children : [
        {
          path:"todo",
          element: <Todos/>,

        },
        {
          path: "todo/add",
          element: <AddTodo/>
        },
        {
          path : "todo/info/:_id",
          element: <InfoTodo/>
        },
        {
          path : "todo/edit/:_id",
          element : <EditTodo/>
        },
        {
          path: "user",
          element: <Users/>
        },
        {
          path : "user/edit/:_id",
          element : <EditUser/>
        },
        
        {
          path : "user/info/:_id",
          element: <InfoUser/>
        },
        {
          path: "user/add",
          element: <AddUser/>
        }
       
      ]
    }
    
    
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
        <AddTodo />

        <Todos />
      </RouterProvider>
    </>
  );
}

export default App;
