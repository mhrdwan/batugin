"use client";
import React, { useEffect, useState } from "react";
import daunKanan from "../../../public/assets/daunkanan.png";
import daunKanan2 from "../../../public/assets/daun2.png";
import Vector from "../../../public/assets/Vector.png";
import Vector5 from "../../../public/assets/Vector 5.png";
import Rectangle from "../../../public/assets/Rectangle 12.png";
import Image from "next/image";
import Orang from "../../../public/assets/orang.png";
// import bannerHp from "../../../public/assets/batugin-banner-bawah-hp.png";
import Orang2 from "../../../public/assets/orang 2.png";
import BannerKuning from "../../../public/assets/Frame 90.png";
import SwipperDashboard from "../Swipper/Swipper";
import Swipper2 from "../Swipper/swipper2";
import SwipperMobile from "../Swipper/swipperMobile";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ArtikelKamiSwipper from "../Swipper/ArtikelKamiSwipper";
import banner1 from "../../../public/assets/Banner_Home/Banner 01.png";
import banner2 from "../../../public/assets/Banner_Home/Banner 02.png";
import banner3 from "../../../public/assets/Banner_Home/Banner 03.png";
import banner4 from "../../../public/assets/Banner_Home/Banner 04.png";
import axios from "axios";
import { baseURL } from "@/app/api/baseUrl";

const bannerHome = [banner1, banner2, banner3, banner4];

function ArtikelKami() {
  const routerr = usePathname();
  console.log(`ini router`, routerr);
  const [dataArtikel, setdataArtikel] = useState("");

  async function getArtikel() {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article?page=1&limit=10`
      );
      console.log(`ini response`, response.data.data);
      setdataArtikel(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArtikel();
  }, []);

  console.log(`ini dataArtikel`, dataArtikel);
  const ArtikelKami = [
    {
      id: 1,
      gambar: "Rectangle",
      desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
    },
    {
      id: 2,
      gambar: "Square",
      desc: "Inovasi terbaru dalam bidang teknologi pertanian yang mempercepat produksi tanaman.",
    },
    {
      id: 3,
      gambar: "Circle",
      desc: "Tren fashion musim panas 2024: gaya minimalis yang sedang naik daun.",
    },
    {
      id: 4,
      gambar: "Triangle",
      desc: "Penemuan baru dalam pengobatan kanker yang menjanjikan hasil yang lebih baik.",
    },
    {
      id: 5,
      gambar: "Triangle",
      desc: "Penemuan baru dalam pengobatan kanker yang menjanjikan hasil yang lebih baik.",
    },
    {
      id: 6,
      gambar: "Triangle",
      desc: "Penemuan baru dalam pengobatan kanker yang menjanjikan hasil yang lebih baik.",
    },
  ];

  const KataMereka = [
    {
      id: 1,
      desc: "“ Lorem ipsum dolor sit amet consectetur. Lectus et orci faucibus tellus proin mauris. “",
      name: "-David Sanjaya, 42 Tahun.",
      foto: Orang,
    },
    {
      id: 2,
      desc: "“ Tren fashion musim panas 2024: gaya minimalis yang sedang naik daun. “",
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
    <div className=" ">
      <div className=" flex justify-between items-center">
        {/* {routerr !== "/artikel" && (
          <>
            <div className=" justify-start hidden md:flex">
              <Image src={Vector} alt="Vector" />
            </div>
            <div className="hidden md:flex justify-end">
              <Image src={daunKanan} alt="Daun Kanan" />
            </div>
          </>
        )} */}
      </div>
      <div className="bg-red flex mx-auto">
        <div
          className={`grid grid-rows-2 gap-4 pl-6 pr-6  mt-[4rem] ${
            routerr === "/artikel" ? " md:pl-0 md:pr-0" : " md:pl-28 md:pr-28"
          }`}
        >
          <p className="underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 text-[1.5rem] ">
            Artikel Kami
          </p>
          <p className="font-normal mt-3 text-[1rem] text-neutral-3">
            Sharing is caring
          </p>

          {/* <div className=" flex justify-center bg-red-500  "> */}
          {/* <div className="md:grid flex md:grid-cols-4  w-full lg:grid-cols-4 gap-12 mt-20 overflow-x-scroll">
            {ArtikelKami.map((item) => (
              <div className="w-[282px] h-[416px] p-3 bg-neutral-50 rounded-sm shadow flex-col justify-start items-start gap-3 inline-flex">
                <img
                  className="self-stretch h-[272px] rounded-sm"
                  src="https://via.placeholder.com/258x272"
                />
                <div className="self-stretch text-black text-sm font-medium font-['Inter'] leading-normal">
                  Negara-negara yang membuat ekspor Jamu indonesia meningkat di
                  tahun 2..
                </div>
                <div className="w-[258px] h-12 px-5 py-2 bg-red-600 rounded-sm justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-base font-medium font-['Poppins']">
                    <Link href={"/artikel"}>Lihat Artikel</Link>
                  </div>
                </div>
              </div>
            ))} */}
          {/* </div> */}
          {/* </div> */}

          <ArtikelKamiSwipper dataArtikel={dataArtikel || []} />

          <div className="ml-[-11.75rem] mt-[9.7rem]">
            <Image src={Vector5} />
          </div>
          {routerr !== "/artikel" && (
            <div className="mt-[3rem] hidden ">
              <p className="underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 font-semibold text-[1.5rem]">
                Kata Mereka
              </p>
              <p className="font-normal mt-3 text-[1rem] text-neutral-3">
                Yang sudah merasakan khasiat batugin
              </p>
            </div>
          )}
        </div>
      </div>
      {routerr !== "/artikel" && (
        <>
          <div className="  w-full  py-4 hidden">
            {/* <Swipper2/> */}
            <div className="md:hidden   ">
              <SwipperMobile KataMereka={KataMereka} />
            </div>
            <div className="hidden md:block">
              <SwipperDashboard KataMereka={KataMereka} />
            </div>
          </div>
          {/* <div className="flex justify-end  mr-10">
            <Image src={daunKanan2} />
          </div> */}

          <div className="cover-banner  hidden md:block">
            <div
              className="w-full h-[16.7rem]  flex  items-center"
              // style={{
              //   backgroundImage: "url('/assets/Frame 90.png')",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              // }}
            >
              <div className="tengah pl-[100px] mx-auto  pr-[100px]">
                <div className="Frame72  w-48 mb-5 h-10 flex-col justify-center items-center gap-0.5 inline-flex">
                  <div className="OutAchivement text-yellow-900 text-2xl font-semibold font-['Poppins']">
                    Our Achivement
                  </div>
                  <div className="Rectangle6 self-stretch h-1 bg-red-600" />
                </div>
                <div className="text-center grid grid-cols-4">
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    50 years
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    60.000+
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    4.9/5
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    1500
                  </div>
                  <div className="text-secondary-2 text-[1.25rem]">
                    Been trusted by customer
                  </div>
                  <div className="text-secondary-2 text-[1.25rem]">
                    Sold to our customer
                  </div>
                  <div className="text-secondary-2 text-[1.25rem]">
                    Ratings in our store
                  </div>
                  <div className="text-secondary-2 text-[1.25rem]">
                    Bottle sold / month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-20   justify-center space-x-5 hidden sm:flex">
            {bannerHome.map((item, index) => (
              <div key={index}>
                <Image
                  src={item}
                  alt={`Banner ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
            ))}
          </div>
          <div className="cover-banner sm:mt-16  md:hidden ini-hp">
            <div
              className="w-full h-[50.625rem] bg-red-300 flex  "
              style={{
                backgroundImage: "url('/assets/batugin-banner-bawah-hp.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className=" w-full text-center">
                <p className="underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-secondary-2 mt-[100px] font-bold text-[1rem]">
                  Our Achivement
                </p>
                <p className="text-secondary-2 text-[2rem] font-bold mt-[100px]">
                  50 years
                </p>
                <p className="text-secondary-2 text-[1rem] mt-1">
                  Been trusted by customer
                </p>
                <p className="text-secondary-2 text-[2rem] font-bold mt-[100px]">
                  60.000+
                </p>
                <p className="text-secondary-2 text-[1rem] mt-1">
                  Sold to our customer
                </p>
                <p className="text-secondary-2 text-[2rem] font-bold mt-[100px]">
                  1500
                </p>
                <p className="text-secondary-2 text-[1rem] mt-1">
                  Bottle sold / month
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ArtikelKami;
