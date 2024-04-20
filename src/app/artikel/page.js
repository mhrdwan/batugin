import React from "react";
import NavbarComp from "@/components/NavbarComp";
import PointKamu from "@/components/PointKamu/page";
import bannerartikel from "../../../public/assets/bannerartikerl.png";
import Image from "next/image";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FooterComp from "@/components/Home/Footer";

export default function Artikel() {
  return (
    <>
      <NavbarComp />
      <div className="relative h-[8.9rem] bg-red-400 overflow-hidden">
        <Image
          src={bannerartikel}
          alt="Banner Artikel"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="pl-[1.42rem] pr-[1.42rem]">
        <h1 className="text-[12px] font-semibold text-start mt-6 font-poopin ">
          Dokter Spesialis Urologi yang bisa bantu atasi Batu Ginjal
        </h1>
        <p className="text-start text-[10px] mt-2 text-gray-600">
          Selasa, 12 Maret 2024
        </p>
        <div className="  mt-6 ">
          <p className="font-semibold font-poopin">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
            bibendum pellentesque quam a convallis. Sed ut vulputate nisi.
            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
            magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
            nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
            varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
            eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
            venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
          </p>
          <p className="mt-4">
            Duis non sapien at turpis interdum lobortis. Aenean ullamcorper
            turpis sed turpis accumsan tincidunt. Nam ullamcorper congue
            suscipit. Integer nec nisi ut risus consequat volutpat. Vivamus ac
            quam ut velit viverra tempor. Phasellus aliquet neque sit amet justo
            eleifend, et malesuada libero ultrices.
          </p>
        </div>
        <ArtikelKami />
      </div>
      <div className="mt-[5rem]">
        <FooterComp />
      </div>
    </>
  );
}
