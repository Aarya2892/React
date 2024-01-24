import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
 
   const data=  useLoaderData()
    // const [data, setdata] = useState([])

    // useEffect(()=>{
    //    fetch('https://api.github.com/users/Aarya2892')
    //    .then(response => response.json())
    //    .then(data=>{
    //       setdata(data);
    //    })
    // },[])

  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-5 m-5 '>
      GitHub followers: {data.followers}

      <img src={data.avatar_url} alt='Git picture' width={300}></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async ()=>{
 const response = await fetch('https://api.github.com/users/Aarya2892')
 return response.json()
}