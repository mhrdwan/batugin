import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function SwipperMobile({ KataMereka }) {
  const [spaceBetween, setSpaceBetween] = useState(30);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMediaQuery = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSpaceBetween(30);
        setSlidesPerView(2);
        setIsMobile(true);
      }
    };

    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);

    return () => window.removeEventListener("resize", checkMediaQuery);
  }, []);

  // Fungsi untuk memotong teks dan menambahkan titik-titik
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const swiperStyle = { display: "flex", justifyContent: "center" };

  return (
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={2}
      spaceBetween={spaceBetween}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper"
      style={swiperStyle}
    >
      {KataMereka.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full max-w-[300px] min-h-[28rem] max-h-[30rem] bg-white rounded shadow-lg flex flex-col items-center">
            <Image
              className="w-full rounded-t max-h-[200px] object-cover"
              src={item.foto}
              layout="responsive"
              width={300}
              height={160}
            />
            <div className="p-4 min-h-[200px] max-h-[300px] overflow-hidden">
              {" "}
              {/* Modifikasi di sini */}
              <div className="text-center text-red-600 text-xl font-medium">
                Apa kata mereka?
              </div>
              <div className="mt-2 text-stone-900 text-lg font-medium">
                {truncateText(item.desc, 100)}
              </div>
              <div className="mt-1 text-yellow-900 text-lg font-normal">
                {item.name}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwipperMobile;
