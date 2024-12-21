import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./LatestVisa.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// const [visas,SetVisas]= useState([])


const LatestVisa = () => {
    return (
        <>
        <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
        </SwiperSlide>
       
      </Swiper>
      </>
    );
};

export default LatestVisa;