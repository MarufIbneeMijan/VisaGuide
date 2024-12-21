import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {type,countryName,time,description,age,validity,method ,fee,_id  }=country
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl text-red-400 text-center">{countryName}</h2>
          <p>{description}</p>
          <ul className='font-bold' >
            <li>Visa Type: {type}</li>
            <li>Processing Time: {time}</li>
            <li>Age Restriction: {age}</li>
            <li>Fee: {fee}</li>
            <li>Validity: {validity}</li>
            <li>Method: {method}</li>
          </ul>
         <Link to={`/details/${_id}`} >View Details</Link>
        </div>
      </div>
    );
};

export default Country;