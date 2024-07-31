import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAll } from '../store/slices/todoSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate  = useNavigate()

    const dispatch = useDispatch()

    const deleteHandler = ()=>{
        dispatch(deleteAll())
    }
  return (
    <div className='navbar'>
        <h2>Custom Todo</h2>
        <div>
        <button className='deleteAll-btn' onClick={()=> navigate("add")}> Add Todo</button>
        <button className='deleteAll-btn' onClick={deleteHandler}> Delete All</button>

        </div>
        

    </div>
  )
}

export default Navbar