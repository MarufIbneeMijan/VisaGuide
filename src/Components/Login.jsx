import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {loginuser,googleSingIn}=useContext(authContext)
  const location = useLocation()
  const nevigate= useNavigate()
  const handleLogin =(event)=>{
    event.preventDefault()
    
    const email=event.target.email.value
    const password=event.target.password.value
    loginuser(email,password)
    .then(userCredential=>{
        console.log(userCredential.user)
       nevigate(location?.state ? location.state:"/" )
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    })
  }
 const handleGoogle= ()=>{
  googleSingIn()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
   
    nevigate(location?.state ? location.state:"/" )
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
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
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>Don't Have A Account?  <Link className="text-red-400" to={"/singup"} >SingUp Here </Link></p>
          <button onClick={handleGoogle} >Sing In With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
