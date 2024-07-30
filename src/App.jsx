import { useState } from 'react'
import Todos from './components/Todos'

import './App.css'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <AddTodo/>

    <Todos/>
  
    </>
  )
}

export default App
