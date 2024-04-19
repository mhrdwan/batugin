import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function SwipperDashboard({ KataMereka }) {
  const [spaceBetween, setSpaceBetween] = useState(400);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false); // State baru untuk cek mobile

  useEffect(() => {
    const checkMediaQuery = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setSpaceBetween(600);
        setSlidesPerView(3);
        setIsMobile(false); // Tidak mobile
      } else {
        setSpaceBetween(400);
        setSlidesPerView(1);
        setIsMobile(true); // Mobile
      }
    };

    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);

    return () => window.removeEventListener("resize", checkMediaQuery);
  }, []);

  // Menambahkan style kondisional untuk mobile
  const swiperStyle = isMobile
    ? { display: "flex", justifyContent: "center" }
    : {};

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper"
      style={swiperStyle} // Terapkan style kondisional
    >
      {KataMereka.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-[35rem] h-[304px] bg-white rounded shadow-lg justify-start items-center inline-flex">
            <Image
              className="w-[16rem] self-stretch rounded-tl rounded-bl"
              src={item.foto}
            />
            <div className="w-[467.57px] self-stretch p-5 flex-col justify-center items-start gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-red-600 text-2xl font-medium font-['Poppins']">
                  Apa kata mereka?
                </div>
                <div className="self-stretch h-1 bg-gradient-to-r from-red-800 to-red-600" />
              </div>
              <div className="justify-start items-start inline-flex" />
              <div className="self-stretch text-stone-900 text-xl font-medium font-['Poppins']">
                {item.desc}
              </div>
              <div className="text-yellow-900 text-xl font-normal font-['Poppins']">
                {item.name}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipperDashboard;
