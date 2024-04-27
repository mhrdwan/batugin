'use client'
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import PointKamu from "@/components/PointKamu/page";
import KolaborasiBatugin from "@/components/TabActivity/KolaborasiBatugin";
import SenamAero from "@/components/TabActivity/SenamAero";
// import KolaborasiBatugin from "@/components/KolaborasiBatugin"; // Contoh import komponen baru
// import MuriBatugin from "@/components/MuriBatugin"; // Contoh import komponen baru
// import SenamSehatBatugin from "@/components/SenamSehatBatugin"; // Contoh import komponen baru
import React, { useState } from "react";

export default function Page() {
  const [aktif, setAktif] = useState("pesta");

  // Fungsi untuk mengubah tab aktif
  const changeTab = (tab) => {
    setAktif(tab);
  };

  // Fungsi untuk menentukan komponen mana yang akan ditampilkan berdasarkan tab yang aktif
  const renderComponent = () => {
    switch (aktif) {
      case "pesta":
        return <PointKamu />;
      case "kolaborasi":
        return <KolaborasiBatugin />;
      case "muri":
        return <SenamAero />;
      case "senam":
        return <SenamAero />;
      default:
        return <PointKamu />;
    }
  };

  return (
    <div className="bg-white">
      <NavbarComp />
      <NorifReward />
      <div className="w-full mt-10 md:pr-[8.5rem] md:pl-[8.5rem]">
        <div className="Frame164 h-8 justify-start items-start gap-5 inline-flex">
          <div className={`Frame110 hover:cursor-pointer flex-col justify-center items-center gap-1 inline-flex ${aktif === 'pesta' ? '' : 'opacity-80'}`} onClick={() => changeTab("pesta")}>
            <div className="PestaPointBatugin text-base font-medium font-['Poppins']">
              Pesta Point Batugin
            </div>
            {aktif === 'pesta' && <div className="Rectangle6 self-stretch h-1 bg-red-600" />}
          </div>
          <div className={`Frame151 hover:cursor-pointer opacity-80 flex-col justify-start items-start gap-1 inline-flex ${aktif === 'kolaborasi' ? '' : 'opacity-80'}`} onClick={() => changeTab("kolaborasi")}>
            <div className="KolaborasiBatugin text-base font-medium font-['Poppins']">
              Kolaborasi Batugin
            </div>
            {aktif === 'kolaborasi' && <div className="Rectangle6 self-stretch h-1 bg-red-600" />}
          </div>
          <div className={`Frame152 hover:cursor-pointer opacity-80 flex-col justify-start items-start gap-1 inline-flex ${aktif === 'muri' ? '' : 'opacity-80'}`} onClick={() => changeTab("muri")}>
            <div className="MuriBatugin text-base font-medium font-['Poppins']">
              Muri Batugin
            </div>
            {aktif === 'muri' && <div className="Rectangle6 self-stretch h-1 bg-red-600" />}

          </div>
          <div className={`Frame153 hover:cursor-pointer opacity-80 flex-col justify-start items-start gap-1 inline-flex ${aktif === 'senam' ? '' : 'opacity-80'}`} onClick={() => changeTab("senam")}>
            <div className="SenamSehatBatugin text-base font-medium font-['Poppins']">
              Senam Sehat Batugin
            </div>
            {aktif === 'senam' && <div className="Rectangle6 self-stretch h-1 bg-red-600" />}

          </div>
        </div>
      </div>
      {renderComponent()}
    </div>
  );
}
