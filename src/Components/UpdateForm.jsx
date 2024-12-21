import React from 'react';

const UpdateForm = () => {
   
    const handleUpdate = (event,id)=>{
        // const form= event.target
        // const type = event.target.type.value
        // const countryName = event.target.countryName.value
        // const time = event.target.time.value
        // const description = event.target.description.value
        // const age = event.target.age.value
        // const validity = event.target.validity.value
        // const method = event.target.method.value
        // const fee = event.target.fee.value
        
        // const updateVisa = {type,countryName,time,description,age,validity,method,fee,userEmail}
        console.log(id,event)
    }
    return (
       
        
        <div>
             <div className="container mx-auto bg-slate-300">
        <form className="grid md:grid-cols-2 grid-cols-1 py-5" onSubmit={()=>handleUpdate(_id)}  >
          <input
            type="text"
            placeholder="Country Name"
            name="countryName"
            required
            className="input w-full max-w-xs"
            defaultValue={countryName}
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
            defaultValue={time}
          />
          <input
            type="text"
            placeholder="Description."
             name="description"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={description}
            required
          />
          <input
            type="number"
            placeholder="Age_restriction"
             name="age"
             required
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={age}
          />
          <input
            type="number"
            placeholder="fee"
            required
             name="fee"
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={fee}
          />
          <input
            type="text"
            placeholder="Validity"
             name="validity"
             required
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={validity}
          />
          <input
            type="text"
            placeholder="Application_method."
             name="method"
             required
            className="input input-bordered input-primary w-full max-w-xs"
            defaultValue={method}
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

          <button  >Submit</button>
        </form>
      </div>
        </div>
    );
};

export default UpdateForm;