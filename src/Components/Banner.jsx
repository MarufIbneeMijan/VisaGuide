import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Banner = () => {
  return (
    <>
    <h1 className="text-center text-4xl" >Our Services</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className=" text-center">Visa Application!</h2>
              <p>Our company specializes in providing comprehensive visa application services to individuals and businesses. We streamline the complex visa application process, offering expert guidance and support throughout every stage.</p>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center">Visa Proccess</h2>
              <p>Our company specializes in providing comprehensive visa application services to individuals and businesses. We streamline the complex visa application process, offering expert guidance and support throughout every stage.</p>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center">Student Concestency</h2>
              <p>Our company specializes in providing comprehensive visa application services to individuals and businesses. We streamline the complex visa application process, offering expert guidance and support throughout every stage.</p>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center">IELTS</h2>
              <p>Our company specializes in providing comprehensive visa application services to individuals and businesses. We streamline the complex visa application process, offering expert guidance and support throughout every stage.</p>
             
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
