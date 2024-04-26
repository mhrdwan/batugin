import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../../public/assets/BannerUtamaHome/WEB BANNER BATUGIN (1440px x 771px)-01-2.png";
import banner2 from "../../../../public/assets/BannerUtamaHome/WEB BANNER BATUGIN (1440px x 771px)-02 (1).png";
import banner3 from "../../../../public/assets/BannerUtamaHome/WEB BANNER BATUGIN (1440px x 771px)-03 (1).png";
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
              <Image src={item} alt={`Banner ${index + 1}`} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
