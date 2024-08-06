import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styleArtikelKami.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function ArtikelKamiSwipper({ dataArtikel }) {
  return (
    <Swiper
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 250,
          // centeredSlides: true,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
      className="mySwiper "
    >
      {dataArtikel?.map((item) => (
        <SwiperSlide key={item.no}>
          <div className="w-[282px] h-[350px] p-3 bg-neutral-50 rounded-sm shadow flex flex-col justify-between items-start gap-3">
            <div className="w-full h-[200px] overflow-hidden">
              <img
                className="w-full h-full rounded-sm object-cover transform transition-transform duration-500 hover:scale-110"
                src={item?.foto}
                alt={item?.sub_title}
              />
            </div>
            <div className="self-stretch text-start text-black text-sm font-medium font-['Inter'] leading-normal">
              {item.title}
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[258px] h-12 px-5 py-2 bg-red-600 rounded-sm flex justify-center items-center">
                <div className="text-white text-base font-medium font-['Poppins']">
                  <Link
                    href={`/artikel/${item?.sub_title
                      ?.toLowerCase() 
                      .replace(/[^a-z0-9\s-]/g, "")
                      .trim() 
                      .replace(/\s+/g, "-") 
                      .replace(/-+/g, "-")}/${item?.id}`}
                  >
                    Lihat Artikel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
