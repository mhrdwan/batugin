import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import './test.css'
function SwipperMobile({ KataMereka }) {
  const [spaceBetween, setSpaceBetween] = useState(5);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMediaQuery = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSpaceBetween(5);
        setSlidesPerView(1);
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
      slidesPerView={"auto"}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <>
        {KataMereka.map((item, index) => (
         <SwiperSlide key={index}>
          <div className="max-w-[320px] min-h-[25rem] max-h-[25rem] bg-white rounded shadow-lg flex flex-col items-center">
            <Image
              className="w-full rounded-t max-h-[210px] object-cover"
              src={item.foto}
              layout="responsive"
              width={300}
              height={160}
            />
            <div className="p-4 min-h-[200px] max-h-[300px] overflow-hidden">
              {" "}
              {/* Modifikasi di sini */}
              <div className="text-center  text-red-600 text-sm font-medium">
                Apa kata mereka?
              </div>
              <div className="mt-2 text-start text-stone-900 text-lg font-medium">
                {truncateText(item.desc, 100)}
              </div>
              <div className="mt-1 text-yellow-900 text-lg font-normal">
                {item.name}
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </>
    </Swiper>

    // <Swiper
    //   slidesPerView={2}
    //   centeredSlides={true}
    //   spaceBetween={10}
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
    //   loop
    //   modules={[Autoplay]}
    //   className="mySwiper"
    //   style={swiperStyle}
    // >
    //   {KataMereka.map((item, index) => (
    //     <SwiperSlide key={index}>
    //       <div className="max-w-[320px] min-h-[30rem] max-h-[30rem] bg-white rounded shadow-lg flex flex-col items-center">
    //         <Image
    //           className="w-full rounded-t max-h-[180px] object-cover"
    //           src={item.foto}
    //           layout="responsive"
    //           width={300}
    //           height={160}
    //         />
    //         <div className="p-4 min-h-[200px] max-h-[300px] overflow-hidden">
    //           {" "}
    //           {/* Modifikasi di sini */}
    //           <div className="text-center t text-red-600 text-sm font-medium">
    //             Apa kata mereka?
    //           </div>
    //           <div className="mt-2 text-stone-900 text-lg font-medium">
    //             {truncateText(item.desc, 100)}
    //           </div>
    //           <div className="mt-1 text-yellow-900 text-lg font-normal">
    //             {item.name}
    //           </div>
    //         </div>
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
}

export default SwipperMobile;
