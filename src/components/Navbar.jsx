import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAll } from '../store/slices/todoSlice'

const Navbar = () => {

    const dispatch = useDispatch()

    const deleteHandler = ()=>{
        dispatch(deleteAll())
    }
  return (
    <div className='navbar'>
        <h2>Custom Todo</h2>
        <button className='deleteAll-btn' onClick={deleteHandler}> Delete All</button>

    </div>
  )
}

export default Navbar