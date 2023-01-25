import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 style={{ position: "absolute", zIndex: "1", color: "white" }}>
            GET YOUR <span style={{backgroundColor:'orange'}}>EDICATION</span> TODAY
          </h1>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
            style={{ position: "relative" }}
          />
        </SwiperSlide>
        <SwiperSlide>
        <h1 style={{ position: "absolute", zIndex: "1", color: "white" }}>
            GET YOUR <span style={{backgroundColor:'orange'}}>EDICATION</span> TODAY
          </h1>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
            style={{ position: "relative" }}
          />
        </SwiperSlide>
        <SwiperSlide>
        <h1 style={{ position: "absolute", zIndex: "1", color: "white" }}>
            GET YOUR <span style={{backgroundColor:'orange'}}>EDICATION</span> TODAY
          </h1>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
            style={{ position: "relative" }}
          />
        </SwiperSlide>
        <SwiperSlide>
        <h1 style={{ position: "absolute", zIndex: "1", color: "white" }}>
            GET YOUR <span style={{backgroundColor:'orange'}}>EDICATION</span> TODAY
          </h1>
          <img
            src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
            alt=""
            style={{ position: "relative" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider