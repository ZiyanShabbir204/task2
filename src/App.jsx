import { useEffect, useState } from "react";

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
import { Navigate } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/slices/adminSlice.jsx";
import UsersWrapper from "./components/users/UsersWrapper.jsx";
import ChangePassword from "./components/admin/ChangePassword.jsx";
import UpdateProfile from "./components/admin/UpdateProfile.jsx";

function App() {
  // const token = localStorage.getItem("token")

  const token = useSelector((state) => state.admin.token);

  // const token =
  const adminRouter = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Navigate to="login" />,  
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        }
        // ,
        // {
        //   path:"*",
        //   element:<NotFound/>
        // }
      ],
    },
    {
      path: "*",
      element:<NotFound/>
    }
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper p={token} />,
      children: [
        // {
        //   path : "login",
        //   element: <Login/>
        // },
        // {
        //   path : "/signup",
        //   element: <Signup/>
        // },
        // {
        //   path: "/",
        //   element: <Navigate to="login" />,  // Redirect from / to /login
        // },
        {
          path: "todo",
          element: <TodoWrapper/>,
        },
        {
          path: "todo/add",
          element: <AddTodo />,
        },
        {
          path: "todo/info/:_id",
          element: <InfoTodo />,
        },
        {
          path: "todo/edit/:_id",
          element: <EditTodo />,
        },
        {
          path: "user",
          element: <UsersWrapper />,
        },
        {
          path: "user/edit/:_id",
          element: <EditUser />,
        },

        {
          path: "user/info/:_id",
          element: <InfoUser />,
        },
        {
          path: "user/add",
          element: <AddUser />,
        },{
        path : "admin/changepassword/:_id",
        element : <ChangePassword/>
        },{
          path : "admin/updateprofile/:_id",
        element : <UpdateProfile/>
        }
      ],
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]);

  return (
    <>
      {console.log(token, "token????????????")}
      <RouterProvider router={token ? router : adminRouter} />
    </>
  );
}

export default App;
