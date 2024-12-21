import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Country from "./Country";
import Banner from "./Banner";

import { Link, useLoaderData } from "react-router-dom";
const HomePage = () => {
 
    const data = useLoaderData()
  
    const [text] = useTypewriter({
    words: [
      "Visa Application",
      "Visa Information",
      "Consultation",
      "Passport Service!",
    ],
    loop: 0,
  });
 

  return (
    <div className="container mx-auto">
      {/* Bannner section  */}
      <section className="flex md:flex-row flex-col">
        <div className="space-x-7 max-w-1/2">
          <h1 className="text-xl p-2 border-2 bg-orange-200 text-center mb-11 mt-56">
            Professional Visa Consulting
          </h1>
          <p className="text-2xl">
            Our experienced team of consultants is dedicated to simplifying the
            immigration process, ensuring a stress-free journey for you and your
            loved ones.
          </p>
          <p className="text-[50px] text-orange-300 ">
            We Offer <span className="text-[40px] text-orange-600" >{text}</span> 
          </p>
        </div>
        <div>
            <img src="https://templatekit.jegtheme.com/vizago/wp-content/uploads/sites/401/2023/08/image-hero.png" alt="" srcset="" />
        </div>
      </section>
      {/* Latest Visa Section */}
      <section className="mt-[100px]" >
       <Banner></Banner>
      </section>
      <section>
        <h1 className="text-4xl text-center">Latest Visas We Have !!</h1>
        <div className="flex md:flex-row flex-col" >
        {
        data.map(item=> <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/125px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.countryName}</h2>
              <p>Visa Type: {item.type}</p>
              <p>Precessing Time: {item.time}</p>
              <p>Age: {item.type}</p>
              <p>Method: {item.method}</p>
              <p>Visa Fee: {item.fee}</p>
              
              <div className="card-actions">
              <Link to={`/details/${item._id}`} >View Details</Link>
              </div>
            </div>
          </div>
        )
       }
        </div>
     
      </section>
      <section>
        <h1 className="text-center text-4xl" >Our Success Stats </h1>
      <div className="stats shadow w-full">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Satisfied Customer</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title">Visas Proccess</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
      </section>
    </div>
    
  );
};

export default HomePage;
