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
  const [spaceBetween, setSpaceBetween] = useState(100);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false); // State baru untuk cek mobile

  useEffect(() => {
    const checkMediaQuery = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setSpaceBetween(100);
        setSlidesPerView(3);
        setIsMobile(false); // Tidak mobile
      } else {
        setSpaceBetween(100);
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
      <div className="max-w-[740px] w-[750px] min-h-[15rem] max-h-[15rem] rounded-xl shadow-xl flex flex-row items-center overflow-hidden">
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image
            className="rounded-l object-cover"  // This will ensure the image covers appropriately
            src={item.foto}
            layout="responsive"  // Changed back to 'responsive' to maintain aspect ratio
            width={375}  // Approximate width to maintain balance with the content side
            height={375} // Approximate height to maintain aspect ratio
            alt="Description of image"
          />
        </div>
        <div className="p-4 w-1/2 overflow-hidden">
          <div className="text-center text-red-600 text-sm font-medium">
            Apa kata mereka?
          </div>
          <div className="mt-2 text-start text-stone-900 text-sm font-medium">
            {item.desc}
          </div>
          <div className="mt-5 text-yellow-900 text-start text-sm font-normal">
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
