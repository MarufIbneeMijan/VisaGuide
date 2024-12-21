import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import AppliedVisaCard from './AppliedVisaCard';

const AppliedVisas = () => {
    const {currentUser} = useContext(authContext)
    const FilterEmail = currentUser.email
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {
                data.filter((items)=>{
                    return items.userEmail.includes(FilterEmail)
                }).map(item=><AppliedVisaCard key={item._id} item={item} ></AppliedVisaCard> )
            }
        </div>
    );
};

export default AppliedVisas;