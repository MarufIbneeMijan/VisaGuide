import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const SingUp = () => {
   
    const { singUpUser}= useContext(authContext)
    const nevigate = useNavigate()
    const handleSingup =(event)=>{
        event.preventDefault()
        
        const email=event.target.email.value
        const password=event.target.password.value
        const photoUrl=event.target.photoUrl.value
        const userName=event.target.userName.value
        console.log(email,password,photoUrl,userName)
        singUpUser(email,password)
        .then(userCredential=>{
            console.log(userCredential.user)
            nevigate("/")
            const notify = () => toast("Registration Successfully ")
            notify()

        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
      }
      
   
   
   
    return (
        <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSingup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo-Url"
                className="input input-bordered"
                name="photoUrl"
                required
              />
            
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="userName"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>Already Have A Account? <Link className='text-blue-500' to={"/login"} >Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SingUp;