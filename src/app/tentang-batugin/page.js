"use client"
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import React from "react";
import Batugin_Product from "../../../public/assets/Batugin Product.png";
import fun_act1 from "../../../public/assets/fun act1.png";
import fun_act2 from "../../../public/assets/fun act2.png";
import image1 from "../../../public/assets/image 2.png";
import image2 from "../../../public/assets/image 3.png";
import Image from "next/image";
import FooterComp from "@/components/Home/Footer";

function Page() {
  return (
    <div className="bg-primary-1 w-full">
      <NavbarComp />
      <NorifReward />
      <div
        className="banner w-full lg:h-[45rem] md:h-[37.1rem] grid grid-cols-2 md:grid-cols-2 "
        style={{
          backgroundImage: "url('/assets/Banner AboutUs.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full ">
          <Image src={Batugin_Product} alt="Batugin Product" />
        </div>
        <div className="mt-5 md:mt-[11rem]">
          {" "}
          {/* Contoh mengurangi margin top pada resolusi medium */}
          <p className="text-[3rem] md:text-[4rem] font-semibold leading-tight">
            Tentang
          </p>{" "}
          {/* Contoh mengatur line height */}
          <p className="font-semibold text-secondary-2  md:text-[6rem] leading-none">
            Batugin
          </p>{" "}
          {/* Contoh mengatur line height menjadi none */}
        </div>
      </div>
      <div className="cover-banner mt-[5rem] max-w-screen-xl mx-auto">
        <p className="text-secondary-2 text-[1.5rem] font-semibold underline decoration-[3px] text-center md:text-start underline-offset-[6px] decoration-red-500">
          Apa itu Daun Tempuyung?
        </p>
      </div>
      <div className="mt-[5rem] justify-center flex w-full flex-wrap  pr-[2.6rem] pl-[2.6rem]">
        <div className="w-full md:w-1/3 p-2 hover:cursor-pointer">
          <Image
            src={image1}
            alt="Deskripsi Image 1"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="w-full md:w-1/3 p-2 hover:cursor-pointer">
          <Image
            src={image2}
            alt="Deskripsi Image 2"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="w-full md:w-1/3 p-2 hover:cursor-pointer">
          <Image
            src={image2}
            alt="Deskripsi Image 3"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
      </div>
      <div className="cover-banner mt-36 max-w-screen-xl mx-auto hidden md:block">
        <div
          className="w-full h-[16.7rem] bg-red-300 flex  items-center"
          style={{
            backgroundImage: "url('/assets/Frame 90.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="tengah w-screen  ">
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
      <div className="mt-32  max-w-screen-xl mx-auto text-center md:text-start">
        <p className="text-secondary-2 text-[1.5rem] font-semibold underline decoration-[3px] underline-offset-[6px] decoration-red-500">
          Our Fun Activities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:gap-4 min-w-[10rem] md:max-w-screen-xl pr-[2.6rem] pl-[2.6rem] mx-auto mt-14">
        {" "}
        {/* Menggunakan gap-2 untuk jarak yang lebih kecil */}
        <div>
          <Image
            src={fun_act1}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 1"
          />
        </div>
        <div>
          <Image
            src={fun_act2}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 2"
          />
        </div>
        <div>
          <Image
            src={fun_act1}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 3"
          />
        </div>
        <div>
          <Image
            src={fun_act2}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 4"
          />
        </div>
        <div>
          <Image
            src={fun_act1}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 5"
          />
        </div>
        <div>
          <Image
            src={fun_act2}
            layout="responsive"
            objectFit="cover"
            alt="Fun Activity 6"
          />
        </div>
      </div>
      <div className="mt-[10rem]">
        <FooterComp mt={20} />
      </div>
    </div>
  );
}

export default Page;
