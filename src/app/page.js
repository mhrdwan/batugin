"use client"
import ApaItu from "@/components/Home/ApaItu";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FollowBatugin from "@/components/Home/Follow";
import FooterComp from "@/components/Home/Footer";
import Slide1 from "@/components/Home/Slide1";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import Image from "next/image";
import up from "../../public/assets/arrow-up-circle.png"
import { useEffect, useRef, useState } from "react";
// export const metadata = {
//   title: "Batugin",
//   description: "Generated by create next app",

// };

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const apaItuRef = useRef(null);

  useEffect(() => {
    // Opsional: Kondisi tertentu untuk melakukan scroll, misalnya berdasarkan state atau props
    // Jika kondisi terpenuhi, lakukan scroll ke komponen
    if (apaItuRef.current) {
      apaItuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Kosongkan dependency array jika Anda ingin scroll terjadi saat komponen dimuat

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!showScrollButton && window.pageYOffset > 500) { // Misal, tombol muncul ketika user scroll lebih dari 500px
        setShowScrollButton(true);
      } else if (showScrollButton && window.pageYOffset <= 500) {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [showScrollButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Untuk scroll secara smooth
    });
  };

  return (
    <>
      <div ref={apaItuRef}>
        <NavbarComp />
      </div>
      <NorifReward />
      <Slide1 />

      <ApaItu />
      <ArtikelKami />
      <FollowBatugin />
      <FooterComp />

      {showScrollButton && (
        <Image onClick={scrollToTop} src={up} style={{ width: "3rem", position: 'fixed', bottom: '20px', right: '20px' }} className="hover:cursor-pointer" />
        // <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        //  Balik Ke Atas
        // </button>
      )}
    </>
  );
}