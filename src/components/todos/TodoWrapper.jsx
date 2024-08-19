import React,{ Suspense }  from 'react'

import Spinner from '../Spinner';
const Todos = React.lazy(() => import('./Todos'));

const TodoWrapper = () => {
  return (
   
    <Suspense fallback={<Spinner/>}>
       <Todos/>
    </Suspense>
    
  )
}

export default TodoWrapper