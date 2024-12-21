import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import AddedVisa from './AddedVisa';

const MyAddedVisa = () => {
    const {currentUser}=useContext(authContext)
    const userEmail = currentUser.email
    console.log(userEmail)
   const data = useLoaderData()
   const [addedVisa,setAddedVisa]=useState("")
   console.log(data)
   
    return (
        <div>
            <h1 className='text-4xl text-center'>Visas Your added </h1>
          <div className='grid md:grid-cols-3 grid-cols-1' >
          {
                data.filter((items)=>{
                    return items.userEmail.includes(userEmail)
                }).map(item=><AddedVisa item={item}></AddedVisa>)
            }
          </div>
        </div>
    );
};

export default MyAddedVisa;