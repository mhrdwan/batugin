"use client";
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
import alfa from "../../../public/assets/mitra/alfa.png";
import alfamidi from "../../../public/assets/mitra/alfamidi.png";
import viva from "../../../public/assets/mitra/viva-apotek.png";
import watsons from "../../../public/assets/mitra/watsons.png";
import century from "../../../public/assets/mitra/century.png";
import LokasiKamiBaru from "@/components/LokasiKamiBaru/LokasiKamiBaru";

const gambar = [
  apotekGenerik,
  apotek24,
  kimiafarma,
  alfa,
  alfamidi,
  viva,
  watsons,
  century,
];

function MitraKami() {
  return (
    <div className="bg-white">
      <NavbarComp />
      <NorifReward />
      <div className="pl-[120px] pr-[120px] hidden sm:block">
        <LokasiKamiBaru />
      </div>
      <div className="sm:hidden">
        <LokasiKamiBaru />
      </div>

      <div className="flex justify-center  mt-[100px]">
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

      <div className=" sm:pl-[120px] sm:pr-[120px] mt-[80px] grid sm:grid-cols-4 sm:gap-4 grid-cols-3 gap-3">
        {gambar.map((src, index) => (
          <div
            key={index}
            className="w-full h-full p-4 flex justify-center items-center"
          >
            <Image
              src={src}
              alt={`Logo mitra ${index + 1}`}
              layout="intrinsic"
            />
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
