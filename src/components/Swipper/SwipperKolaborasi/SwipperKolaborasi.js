import React from "react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "./style.css";
import kolaborasi1 from "../../../../public/assets/kolaborasi/Banner Zumba Fit Kemenpora Bersama Batugin.png";
import kolaborasi2 from "../../../../public/assets/kolaborasi/Untitled-1.png";
import kolaborasi3 from "../../../../public/assets/kolaborasi/Untitled-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const kolaborasiBanner = [kolaborasi1, kolaborasi2, kolaborasi3];
export default function SwipperKolaborasi() {
  return (
    <div>
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
        {/* {kolaborasiBanner.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <Image
                src={item}
                alt={`Banner ${index + 1}`}
                width={"100%"}
                layout="cover"
              />
            </SwiperSlide>
          </div>
        ))} */}
         <Image
                src={kolaborasiBanner[0]}
                alt={`Banner `}
                width={"100%"}
                layout="cover"
              />
      </Swiper>
    </div>
  );
}
