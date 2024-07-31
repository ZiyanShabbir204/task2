import { useState } from "react";
import Todos from "./components/Todos";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InfoTodo from "./components/InfoTodo";
import EditTodo from "./components/EditTodo";

function App() {
  const router = createBrowserRouter([
    {
      path:"/*",
      element: <Navbar/>
    },
    {
      path: "/todo",
      element: <Todos />,
    },
    {
      path: "/todo/add",
      element: <AddTodo />,
    },
    {
      path: "/todo/info/:_id",
      element: <InfoTodo />,
    },
    {
      path: "/todo/edit/:_id",
      element: <EditTodo />,
    },
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
