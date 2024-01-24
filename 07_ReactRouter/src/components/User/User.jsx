import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

   const {userid } = useParams()

  return (
    <div className='text-center font-bold text-3xl'>
    <Link to="/User">  User: {userid} </Link>
    </div>
  );
}

export default User;
