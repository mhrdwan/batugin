import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../../public/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-01.png";
import banner2 from "../../../../public/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-02.png";
import banner3 from "../../../../public/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-03.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const Banner = [banner1, banner2, banner3];

export default function SwipperHomeUtama() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {Banner.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <Image src={item} alt={`Banner ${index + 1}`} width={"100%"} layout="cover"/>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
