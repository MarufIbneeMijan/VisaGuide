import React from 'react';
import {
    createBrowserRouter
   
  } from "react-router-dom";
import HomeLayout from '../Layout/HomeLayout';
import Login from '../Components/Login';
import SingUp from '../Components/SingUp';
import PrivetRoutes from './PrivetRoutes';
import Countries from '../Components/Countries';
import AddVisa from '../Components/AddVisa';
import MyAddedVisa from '../Components/MyAddedVisa';
import UpdateForm from '../Components/UpdateForm';
import Details from '../Components/Details';
import AppliedVisas from '../Components/AppliedVisas';
import HomePage from '../Components/HomePage';

const router = createBrowserRouter([
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          children:[
            {
              path:"/login",
              element:<Login></Login>
            },
            {
              path:"/",
              element:<HomePage></HomePage>,
              loader:()=>fetch("https://visa-guide-server.vercel.app/allVisa")
            },
            {
              path:"/singup",
              element:<SingUp></SingUp>
            },
            {
              path:"/all-visa",
              element:<Countries></Countries>,
              loader:()=>fetch("https://visa-guide-server.vercel.app/addVisa")
            },
            {
              path:"add-visa",
              element:<PrivetRoutes><AddVisa></AddVisa></PrivetRoutes>
            },
            {
              path:"my-added-visa",
              element:<PrivetRoutes><MyAddedVisa></MyAddedVisa></PrivetRoutes>,
              loader:()=>fetch("https://visa-guide-server.vercel.app/addVisa"),
            
            
            },
            {
              path:"/details/:id",
              element:<PrivetRoutes><Details></Details></PrivetRoutes>,
              loader:({params})=>fetch(`https://visa-guide-server.vercel.app/details/${params.id}`)
              
            
            
            },
            {
              path:"/appliedVisas",
              element:<PrivetRoutes><AppliedVisas></AppliedVisas></PrivetRoutes>,
              loader:()=>fetch("https://visa-guide-server.vercel.app/appliedVisas")
              
            
            
            },
           
          ]
        },
      
      ]);

export default router
