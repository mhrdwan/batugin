import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styleArtikelKami.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function ArtikelKamiSwipper({ ArtikelKami }) {
  return (
    <Swiper
      breakpoints={{
        380: {
          slidesPerView: 2,
          spaceBetween: 200,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 90,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      //   slidesPerView={4}
      //   spaceBetween={30}
      // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper"
    >
      {ArtikelKami?.map((item) => (
        <SwiperSlide key={item.no}>
          <div className="w-[282px] h-[416px] p-3 bg-neutral-50 rounded-sm shadow flex-col justify-start items-start gap-3 inline-flex">
            <img
              className="self-stretch h-[272px] rounded-sm"
              src={item?.foto}
            />

            <div className="self-stretch text-start text-black text-sm font-medium font-['Inter'] leading-normal">
             {item.sub_title}
            </div>
            <div className="w-[258px] h-12 px-5 py-2 bg-red-600 rounded-sm justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-medium font-['Poppins']">
                <Link href={"/artikel"}>Lihat Artikel</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
