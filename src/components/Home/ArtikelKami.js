"use client";
import React from "react";
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
import SwipperDashboard from "../Swipper";
import Swipper2 from "../swipper2";
import SwipperMobile from "../swipperMobile";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
function ArtikelKami() {
  const routerr = usePathname();
  console.log(`ini router`, routerr);

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
    <div className="bg-[#fafafa]">
      <div className=" flex justify-between items-center">
        {!routerr == "/artikel" && (
          <>
            <div className=" justify-start hidden md:flex">
              <Image src={Vector} alt="Vector" />
            </div>
            <div className="hidden md:flex justify-end">
              <Image src={daunKanan} alt="Daun Kanan" />
            </div>
          </>
        )}
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
          <div className="md:grid flex md:grid-cols-4  w-full lg:grid-cols-4 gap-12 mt-20 overflow-x-scroll">
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
            ))}
            {/* </div> */}
          </div>
          <div className="ml-[-11.75rem] mt-[9.7rem]">
            <Image src={Vector5} />
          </div>
          {!routerr == "/artikel" && (
            <div className="mt-[3rem] ">
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
      {!routerr == "/artikel" && (
        <>
          <div className="mt-[2rem]  w-full  py-4 ">
            {/* <Swipper2/> */}
            <div className="md:hidden   ">
              <SwipperMobile KataMereka={KataMereka} />
            </div>
            <div className="hidden md:block">
              <SwipperDashboard KataMereka={KataMereka} />
            </div>
          </div>
          <div className="flex justify-end mt-36 mr-10">
            <Image src={daunKanan2} />
          </div>

          <div className="cover-banner mt-36 hidden md:block">
            <div
              className="w-full h-[16.7rem] bg-red-300 flex  items-center"
              style={{
                backgroundImage: "url('/assets/Frame 90.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="tengah w-screen ">
                <div className="text-center grid grid-cols-4">
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    8+
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    20.000
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    4.2/5
                  </div>
                  <div className="text-accents-2 font-semibold text-[3.125rem]">
                    1000
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

          <div className="cover-banner mt-16  md:hidden ini-hp">
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
                  8 Years
                </p>
                <p className="text-secondary-2 text-[1rem] mt-1">
                  Been trusted by customer
                </p>
                <p className="text-secondary-2 text-[2rem] font-bold mt-[100px]">
                  20.000
                </p>
                <p className="text-secondary-2 text-[1rem] mt-1">
                  Sold to our customer
                </p>
                <p className="text-secondary-2 text-[2rem] font-bold mt-[100px]">
                  1000
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
