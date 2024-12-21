import React, { useContext, useEffect } from 'react';

import  { authContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const nevigate= useNavigate()
    const {currentUser,singOutUser} = useContext(authContext)
  
   
 
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <Link to={"/"} >Home</Link>
           <Link to={"/all-visa"} >All visas</Link>
           <Link to={"/add-visa"} >Add Visa</Link>
           <Link to={"/my-added-visa"} >My added visas</Link>
           <Link to={"/appliedVisas"} >My Visa applications</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Visa Guide</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-5 px-1">
           <Link to={"/"} >Home</Link>
           <Link to={"/all-visa"} >All visas</Link>
           <Link to={"/add-visa"} >Add Visa</Link>
           <Link to={"/my-added-visa"} >My added visas</Link>
           <Link to={"/appliedVisas"} >My Visa applications</Link>
            
          </ul>
        </div>
        <div className="navbar-end">
          {
            currentUser? <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={()=> singOutUser()}>LogOut</button></li>
            </ul>
              </div>:<Link to={"login"} className='btn bg-blue-400' >login</Link>
          }
         
          
        </div>
       
      </div>
    );
};

export default Header;