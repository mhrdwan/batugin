"use client";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import React, { useEffect, useRef, useState } from "react";
import fotoPros from "../../../public/assets/foto-prostad.png";
import Image from "next/image";
import Orang from "../../../public/assets/orang.png";
import Orang2 from "../../../public/assets/orang 2.png";
import SwipperDashboard from "@/components/Swipper/Swipper";
import up from "../../../public/assets/arrow-up-circle.png";
import FooterComp from "@/components/Home/Footer";
import SwipperMobile from "@/components/Swipper/swipperMobile";
import LokasiKami from "@/components/lokasiKami/lokasiKami";
function page() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const apaItuRef = useRef(null);

  useEffect(() => {
    // Opsional: Kondisi tertentu untuk melakukan scroll, misalnya berdasarkan state atau props
    // Jika kondisi terpenuhi, lakukan scroll ke komponen
    if (apaItuRef.current) {
      apaItuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // Kosongkan dependency array jika Anda ingin scroll terjadi saat komponen dimuat

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!showScrollButton && window.pageYOffset > 500) {
        // Misal, tombol muncul ketika user scroll lebih dari 500px
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 500) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Untuk scroll secara smooth
    });
  };

  const KataMereka = [
    {
      id: 1,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang,
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang2,
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang,
    },
    {
      id: 2,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang2,
    },
  ];

  return (
    <div>
      <div ref={apaItuRef}>
        <NavbarComp />
      </div>
      <NorifReward />
      <div className="warp-batugin grid md:grid-cols-2 mt-4 grid-rows-2 md:grid-rows-1 md:pr-[120px] md:pl-[120px]  mx-auto bg-white">
        <div>
          <Image src={fotoPros} />
        </div>
        <div className=" md:block pl-[1.4rem] pr-[1.4rem]  md:mt-[1.4rem]">
          <h3 className="text-[2.25rem] text-secondary-3 font-semibold">
            Batugin Elixir Regular Size
          </h3>
          <div className="mt-10">
            <p className="text-accents-2 text-[1.25rem] font-medium">
              Ukuran produk
            </p>
            <p className="mt-3 text-[0.8rem]">120ml</p>
            <p className="mt-7 text-accents-2 text-[1.25rem] font-medium">
              Desktipsi Produk
            </p>
            <div className="mt-5 text-neutral-3 text-[0.8rem]">
              Batugin Elixir merupakan elixir herbal dengan kandungan ekstrak
              Sonchus arventis folia dan ekstrak Strobilanthus crispus folia.
              Batugin digunakan untuk membantu meluruhkan batu urin
              (nefrolitiasis) dan batu saluran kemih (uretrolitisis), serta
              membantu melancarkan buang air kecil.
            </div>
          </div>
          <button className="bg-accents-2 border text-[1.25rem] border-accents-2 text-white font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2.5rem] hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Beli Sekarang
          </button>
        </div>
      </div>
      <div className="big-size bg-primary-2 h-[52rem] md:h-[44rem] md:mt-[10rem]  md:flex md:justify-center md:items-center">
        <div className="hidden md:block  ">
          <div className="  md:w-full w-[30rem] h-[33rem] pr-[100px]  flex ">
            <div className="  w-[588px] ">
              <h3 className="text-accents-2 text-[2.25rem] font-medium">
                Batugin Elixir Big Size
              </h3>
              <p className="text-neutral-4 text-[1.25rem] font-medium mt-10">
                Ukuran produk
              </p>
              <p className="text-neutral-3 text-[1rem] text-base mt-4">
                300 ml
              </p>
              <p className="text-neutral-4 text-[1.25rem] font-medium mt-10">
                Desktipsi Produk
              </p>
              <p className="text-neutral-3 text-[1rem] text-base mt-3">
                Batugin Elixir merupakan elixir herbal dengan kandungan ekstrak
                Sonchus arventis folia dan ekstrak Strobilanthus crispus folia.
                Batugin digunakan untuk membantu meluruhkan batu urin
                (nefrolitiasis) dan batu saluran kemih (uretrolitisis), serta
                membantu melancarkan buang air kecil.
              </p>
              <button className="bg-accents-2 border text-[1.25rem] border-accents-2 text-white font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2.5rem] hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Beli Sekarang
              </button>
            </div>
            <div className=" ">
              <Image src={fotoPros} width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className="hp md:hidden pt-[1.25rem] mt-[1.42rem] w-full pl-[1.25rem] pr-[1.25rem]">
          <div className=" foto-produk ">
            <Image width={"100%"} src={fotoPros} />
          </div>
          <h3 className="text-accents-2 text-[2.25rem] mt-5 font-medium">
            Batugin Elixir Big Size
          </h3>
          <p className="text-neutral-4 text-[1.25rem] font-medium mt-3">
            Ukuran produk
          </p>
          <p className="text-neutral-3 text-[1rem] text-base mt-4">300 ml</p>
          <p className="text-neutral-4 text-[1.25rem] font-medium mt-3">
            Desktipsi Produk
          </p>
          <p className="text-neutral-3 text-[1rem] text-base mt-3">
            Batugin Elixir merupakan elixir herbal dengan kandungan ekstrak
            Sonchus arventis folia dan ekstrak Strobilanthus crispus folia.
            Batugin digunakan untuk membantu meluruhkan batu urin
            (nefrolitiasis) dan batu saluran kemih (uretrolitisis), serta
            membantu melancarkan buang air kecil.
          </p>
        </div>
      </div>
      <div className="mt-[1rem] md:mt-[5rem]  md:block md:pr-[120px] md:pl-[120px] pl-[20px] pr-[20px]">
        <p className="underline decoration-[3px]  text-secondary-2 underline-offset-[6px] decoration-red-500 font-semibold text-[1.5rem]">
          Lokasi Kami
        </p>
        <p className="text-neutral-2 text-[16px] mb-10">
          Kamu mau ke offline store kami?
        </p>
        <LokasiKami />
      </div>
      <div className="carousel md:mt-[10rem] hidden md:block pl-[1.25rem] md:mb-5 pr-[1.25rem]">
        <p className="underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 font-semibold text-[1.5rem]">
          Kata mereka
        </p>
        <SwipperDashboard KataMereka={KataMereka} />
      </div>
      <div className="md:hidden">
        <p className="underline decoration-[3px] text-secondary-2 underline-offset-[6px] mt-[5rem] text-center decoration-red-500 font-semibold text-[1.5rem]">
          Review Batugin
        </p>
        <p className="text-center mt-4 text-[1rem]">
          Yang sudah merasakan khasiat batugin
        </p>
        <div className="mt-5  w-full items-center flex">
          <SwipperMobile KataMereka={KataMereka} />
        </div>
      </div>
      <div className="carousel ">
        <FooterComp mt={10} />
      </div>
      {showScrollButton && (
        <Image
          onClick={scrollToTop}
          src={up}
          style={{
            width: "3rem",
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
          className="hover:cursor-pointer"
        />
        // <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        //  Balik Ke Atas
        // </button>
      )}
    </div>
  );
}

export default page;
