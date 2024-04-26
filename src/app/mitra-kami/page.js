import React from "react";
import FooterComp from "@/components/Home/Footer";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import Image from "next/image"; // Import Image component for optimized image rendering
import apotekFarma from "../../../public/assets/mitra/apotek-farma.png";
import apotekGenerik from "../../../public/assets/mitra/apotek-generik.png";
import apotekSahabat from "../../../public/assets/mitra/apotek-sahabat.png";
import apotek24 from "../../../public/assets/mitra/apotek24.png";
import kimiafarma from "../../../public/assets/mitra/kimiafarma.png";
import pharmacy from "../../../public/assets/mitra/pharmacy.png";

const gambar = [
  apotekFarma,
  apotekGenerik,
  apotekSahabat,
  apotek24,
  kimiafarma,
  pharmacy,
];

function MitraKami() {
  return (
    <div className="bg-white">
      <NavbarComp />
      <NorifReward />
      <div className="flex justify-center  mt-[40px]">
        <div className="Frame152 w-72 h-28 flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="MitraKami text-center text-yellow-900 text-4xl font-medium font-['Poppins']">
            Mitra Kami
          </div>
          <div className="Rectangle6 self-stretch h-1 bg-gradient-to-r from-red-800 to-red-600" />
          <div className="TemukanKamiDiMitraKami text-center text-zinc-600 text-xl font-medium font-['Poppins']">
            Temukan kami di mitra kami
          </div>
        </div>
      </div>
      <div className=" pl-[120px] pr-[120px] mt-[80px] grid grid-cols-3 gap-4">
        {gambar.map((src, index) => (
          <div key={index} className="w-full h-full p-4 flex justify-center items-center">
            <Image src={src} alt={`Logo mitra ${index + 1}`}  layout="intrinsic"/>
          </div>
        ))}
      </div>
      <div className="mt-[120px]">
        <FooterComp />
      </div>
    </div>
  );
}

export default MitraKami;
