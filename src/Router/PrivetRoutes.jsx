import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const location = useLocation()

    const {currentUser,loading}=useContext(authContext)
 
    if(loading){
        return <div><span className="loading loading-ball loading-lg"></span></div>
    }
    if(currentUser){
        return children
    }
    
    return <Navigate state={location.pathname}  to={"/login"} ></Navigate>
       
    
};

export default PrivetRoutes;