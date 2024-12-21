import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const AddedVisa = ({ item }) => {
  const { currentUser } = useContext(authContext);
  const userEmail = currentUser.email;

  const { type, countryName, time, description, age, validity, method, fee } =
    item;

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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    countryName: "",
    time: "",
    description: "",
    age: "",
    validity: "",
    method: "",
    fee: "",
    userEmail: userEmail,
  });

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    console.log(formData);
    fetch("https://visa-guide-server.vercel.app/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        const notify = ()=> toast("Updated Success")
        notify()
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl text-red-400 text-center">{countryName}</h2>
          <p>{description}</p>
          <ul className="font-bold">
            <li>Visa Type: {type}</li>
            <li>Processing Time: {time}</li>
            <li>Age Restriction: {age}</li>
            <li>Fee: {fee}</li>
            <li>Validity: {validity}</li>
            <li>Method: {method}</li>
          </ul>
          <div>
            <button className="btn bg-indigo-400" onClick={handleModalOpen}>Update</button>
            <button className="btn bg-red-400" onClick={() => handleDelete()}>Delete</button>
          </div>
        </div>
      </div>

      {/* Modal styling  */}
      <div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-75">
            <div className="relative w-full max-w-lg max-h-full">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b border-gray-200 rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Modal Title
                  </h3>

                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleModalClose}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <form
                      className="grid md:grid-cols-2 grid-cols-1 py-5"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        placeholder="Country Name"
                        name="countryName"
                        className="input w-full max-w-xs"
                        defaultValue={countryName}
                        value={formData.countryName}
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            countryName: e.target.value,
                          })
                        }
                      />

                      <input
                        type="number"
                        placeholder="Time"
                        name="time"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={time}
                        value={formData.time}
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Description."
                        name="description"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={description}
                        value={formData.description}
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        placeholder="Age_restriction"
                        name="age"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={age}
                        value={formData.age}
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        placeholder="fee"
                        name="fee"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={fee}
                        value={formData.fee}
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, fee: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Validity"
                        name="validity"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={validity}
                        value={formData.validity}
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, validity: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Application_method."
                        name="method"
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={method}
                        required
                        value={formData.method}
                        onChange={(e) =>
                          setFormData({ ...formData, method: e.target.value })
                        }
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
                            <span className="label-text">
                              Visa application form
                            </span>
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
                            <s
                              type="checkbox"
                              defaultChecked
                              className="checkbox"
                              required
                            />
                          </label>
                        </div>
                      </div>

                      <button>Submit</button>
                    </form>
                  </p>
                </div>
                {/* Modal footer */}
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    onClick={handleModalClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedVisa;
