import React, { Suspense } from 'react'

import Spinner from '../Spinner';
const Users = React.lazy(() => import('./Users'));
const UsersWrapper = () => {
  return (
    
    <Suspense fallback={<Spinner/>}>
        <Users/>
    </Suspense>
    
    
  )
}

export default UsersWrapper