import React from 'react'
import Todos from './Todos'
import { Outlet } from 'react-router-dom'

const TodoWrapper = () => {
  return (
    <div>
        <Todos/>
        <Outlet/>
    </div>
  )
}

export default TodoWrapper