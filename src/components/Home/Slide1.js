import React from "react";
import bgImage from "../../../public/assets/bg-yellow.png";
import kimiaFarmaHome from "../../../public/assets/kimiaFarmaHome.png";
import Batugin_Product from "../../../public/assets/Batugin Product.png";
import Image from "next/image";
import Link from "next/link";

function Slide1() {
  const widthNya = 256; // 16 * 16
  const lebarnya = 21.12; // 1.32 * 16
  const botolGedeLebar = 908.8; // 56.8 * 16
  const botolGedeTinggi = 768; // 48 * 16

  return (
    <>
      <div
        className="bg-primary-1 md:h-[48rem] hidden md:block"
        style={{
          backgroundImage: "url('/assets/bg-yellow.png')",
          backgroundRepeat: "no-repeat",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="mt-[14.5rem] ml-[7.3rem]">
            <p className="text-[1.5rem]">Yuk, kenalan dengan</p>
            <div className="text-[3rem] text-secondary-3 font-bold">
              Obat Peluruh Batu Ginjal <br />
              <span className="text-accents-2">PERTAMA </span> di Indonesia
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-[1.5rem] font-semibold">by</p>
              <Image
                src={kimiaFarmaHome}
                alt="Logo Kimia Farma"
                width={widthNya}
                height={lebarnya}
              />
            </div>
            <Link href={"/obat-peluruh-batu-ginjal-pertama-di-indonesia"}>
              <button className="bg-transparent border text-[1.25rem] border-accents-2 text-accents-2 font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2rem] hover:bg-accents-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Lihat Produk
              </button>
            </Link>
          </div>
          <div className="flex justify-center md:justify-end pr-10">
            <Image
              src={Batugin_Product}
              alt="Gambar Produk Batugin"
              width={botolGedeLebar}
              height={botolGedeTinggi}
            />
          </div>
        </div>
      </div>
      <div
        className="hp h-[20rem] bg-primary-1 md:hidden p-[2.5rem]"
        style={{
          backgroundImage: "url('/assets/kuning-hp.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "73%",
        }}
      >
        <div className="bagi2 grid grid-cols-2 ">
          <div className="">
            <text>Yuk, kenalan dengan</text>
            <text>Obat Peluruh Batu Ginjal PERTAMA di Indonesia</text>
            <div className=" flex ">
              <p className="mr-2">By </p>
              <Image
                src={kimiaFarmaHome}
                alt="Logo Kimia Farma"
                width={100}
                height={lebarnya}
              />
            </div>
            <button className="bg-transparent border text-[1.25rem] border-accents-2 text-accents-2 font-semibold text-base leading-normal w-[10rem] h-[3.75rem] px-2 py-2 mt-[2rem] hover:bg-accents-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Lihat Produk
            </button>
          </div>
          <div className="">
            <Image
              src={Batugin_Product}
              alt="Gambar Produk Batugin"
              width={botolGedeLebar}
              height={"8rem"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide1;
