"use client";
import ApaItu from "@/components/Home/ApaItu";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FollowBatugin from "@/components/Home/Follow";
import FooterComp from "@/components/Home/Footer";
import Slide1 from "@/components/Home/Slide1";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import Image from "next/image";
import up from "../../public/assets/arrow-up-circle.png";
import BATUGIN_PINTU from "../../public/assets/BATUGIN_PINTU.png";
import { useEffect, useRef, useState } from "react";
// export const metadata = {
//   title: "Batugin",
//   description: "Generated by create next app",

// };
import banner1 from "../../public/assets/banner/Banner 01.png";
import banner2 from "../../public/assets/banner/Banner 02.png";
import banner3 from "../../public/assets/banner/Banner 03.png";
import banner4 from "../../public/assets/banner/Banner 04.png";
export default function Home() {
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

  return (
    <>
      <div ref={apaItuRef}>
        <NavbarComp />
      </div>
      <NorifReward />
      <Slide1 />
      {/* <div className="relative"> */}
        <ApaItu />

        <div className="pl-[1.4rem] pr-[1.4rem] flex justify-center w-full mt-[2rem] md:hidden">
          <Image
            src={BATUGIN_PINTU}
            alt="BATUGIN_PINTU"
            width={670}
            height={100}
          />
        </div>
        {/* <div className=" pl-[1.4rem] pr-[1.4rem] hidden md:block mt-[4rem]  w-full md:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-row space-x-4 justify-center ">
            <div style={{ flex: 1, maxWidth: "18%" }}>
              <Image
                src={banner1}
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
              />
            </div>
            <div style={{ flex: 1, maxWidth: "18%" }}>
              <Image
                src={banner2}
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
              />
            </div>
            <div style={{ flex: 1, maxWidth: "18%" }}>
              <Image
                src={banner3}
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
              />
            </div>
            <div style={{ flex: 1, maxWidth: "18%" }}>
              <Image
                src={banner4}
                layout="responsive"
                width={100}
                height={50}
                objectFit="contain"
              />
            </div>
          </div>
        </div> */}

        <ArtikelKami />
      {/* </div> */}
      <FollowBatugin />
      <FooterComp mt={20} />

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
    </>
  );
}
