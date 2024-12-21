import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { format } from "date-fns";
import { toast } from "react-toastify";

const Details = () => {
  const data = useLoaderData();

  const { currentUser } = useContext(authContext);
  const userEmail = currentUser.email;
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // modal logic
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    countryName: "",
    time: format(currentTime, "d:mm:yyyy a"),
    fristName: "",
    lastName: "",
    age: "",
    method: "",
    fee: "",
    email: "",
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
    fetch("https://visa-guide-server.vercel.app/appliedVisas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        const notify = ()=> toast("Applied Successfully")
        notify()
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/125px-Flag_of_Bangladesh.svg.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{data.countryName}</h1>
            <p className="py-6">{data.description}</p>
            <p>Fee: {data.fee}</p>
            <p>Method: {data.method}</p>
            <p>Proccesing Time: {data.time}</p>
            <p>Visa Type: {data.type}</p>
            <p>Visa Validity: {data.validity}</p>
            <button onClick={handleModalOpen}>APPLY NOW</button>
          </div>
        </div>
      </div>
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
                        placeholder={data.countryName}
                        name="countryName"
                        className="input w-full max-w-xs"
                        defaultValue={data.countryName}
                        required
                        value={formData.countryName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            countryName: e.target.value,
                          })
                        }
                      />

                      <input
                        type="text"
                        placeholder="Frist Name."
                        required
                        name="Frist name"
                        className="input input-bordered input-primary w-full max-w-xs"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fristName: e.target.value,
                          })
                        }
                      />
                      <input
                        type="number"
                        placeholder="Age_restriction"
                        name="age"
                        required
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={data.age}
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                      />
                      <input
                        type="number"
                        placeholder="fee"
                        name="fee"
                        required
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={data.fee}
                        value={formData.fee}
                        onChange={(e) =>
                          setFormData({ ...formData, fee: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        name="lastName"
                        className="input input-bordered input-primary w-full max-w-xs"
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                      />
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        className="input input-bordered input-primary w-full max-w-xs"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Application_method."
                        name="method"
                        required
                        className="input input-bordered input-primary w-full max-w-xs"
                        defaultValue={data.method}
                        value={formData.method}
                        onChange={(e) =>
                          setFormData({ ...formData, method: e.target.value })
                        }
                      />
                      <div></div>

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

export default Details;
