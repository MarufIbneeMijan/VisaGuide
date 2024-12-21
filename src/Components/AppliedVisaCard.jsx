import React from 'react';
import Swal from 'sweetalert2';

const AppliedVisaCard = ({item}) => {
    console.log(item)
    const {countryName,email,fee,fristName,lastName,method,time,_id}=item

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://visa-guide-server.vercel.app/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                Swal.fire({
                  title: "Deleted!",
                  text: "Please Refersh ",
                  icon: "success",
                });
              });
          }
        });
      };
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{countryName}</h2>
    <p>{fristName}</p>
    <p>{lastName}</p>
    <p>{fee}</p>
    <p>{email}</p>
    <p>{method}</p>
    <p>{time}</p>

    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete Application</button>
    </div>
  </div>
</div>
    );
};

export default AppliedVisaCard;