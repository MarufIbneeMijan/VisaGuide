import React, { useContext } from "react";
import Header from "./Header";
import { authContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const AddVisa = () => {
  const {currentUser} = useContext(authContext)
  const userEmail = currentUser.email
  
  const handleAddVisa = (event)=>{
    event.preventDefault()
    const form= event.target
    const type = event.target.type.value
    const countryName = event.target.countryName.value
    const time = event.target.time.value
    const description = event.target.description.value
    const age = event.target.age.value
    const validity = event.target.validity.value
    const method = event.target.method.value
    const fee = event.target.fee.value
    
    const newVisa = {type,countryName,time,description,age,validity,method,fee,userEmail}
    console.log(newVisa)
    fetch("https://visa-guide-server.vercel.app/addVisa",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(newVisa)

    })
    .then(res=>res.json())
    .then(data =>{
        form.reset()
        const notify = () => toast("Visa Added Successfully !");
        notify()
    })
  }
  
  
    return (
    <div>
    
      <h1 className="text-center text-5xl p-4">Add a new visa !!</h1>
      <div className="container mx-auto bg-slate-300">
        <form className="grid md:grid-cols-2 grid-cols-1 py-5" onSubmit={handleAddVisa}>
          <input
            type="text"
            placeholder="Country Name"
            name="countryName"
            className="input w-full max-w-xs"
            required
          />
          <select className="select w-full max-w-xs" name="type">
            <option disabled selected>
              Visa Type ???
            </option>
            <option>Student</option>
            <option>Tourist</option>
            <option>Bussiness</option>
          </select> 
         
          <input
            type="number"
            placeholder="Time"
            required
             name="time"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Description."
             name="description"
             required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Age_restriction"
             name="age"
             required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="fee"
            required
             name="fee"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            required
            placeholder="Validity"
             name="validity"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Application_method."
             name="method"
             required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div>
            <div className="form-control max-w-xs">
              <label className="label cursor-pointer">
                <span className="label-text">Valid Passport</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox"
                  required
                />
              </label>
            </div>
            <div className="form-control max-w-xs">
              <label className="label cursor-pointer">
                <span className="label-text">Visa application form</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox"
                  required
                />
              </label>
            </div>
            <div className="form-control max-w-xs">
              <label className="label cursor-pointer">
                <span className="label-text">
                  Recent passport-sized photograph
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox"
                  required
                />
              </label>
            </div>
          </div>

          <button >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
