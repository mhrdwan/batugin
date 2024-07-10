"use client";
import React, { useEffect } from "react";
import NavbarComp from "@/components/NavbarComp";
import PointKamu from "@/components/PointKamu/page";
import bannerartikel from "../..//../../../public/assets/bannerartikerl.png";
import Image from "next/image";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FooterComp from "@/components/Home/Footer";
import { ArticleZustand } from "@/zustand/Article/article";

export default function Artikel({ params }) {
  const { getDetailArticle, detailDataArticle } = ArticleZustand();
  useEffect(() => {
    getDetailArticle(params.id);
  }, []);
  console.log(`slug`, params);
  console.log(`detailDataArticle`, detailDataArticle.data);
  return (
    <div className="bg-white">
      <NavbarComp />
      <div className="relative h-[8.9rem] md:h-[30rem] bg-red-400 overflow-hidden">
        {detailDataArticle?.data?.foto &&
          detailDataArticle.data.foto.startsWith("/") && (
            <Image
              src={detailDataArticle.data.foto}
              alt="Banner Artikel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )}
      </div>

      <div className="pl-[1.42rem] pr-[1.42rem] md:pl-[8.5rem] md:pr-[8.5rem]">
        <h1 className="text-[12px] md:text-[24px] font-semibold text-start mt-6 font-poopin ">
          {detailDataArticle?.data?.sub_title} -{" "}
          {detailDataArticle?.data?.title}
        </h1>
        <p className="text-start md:text-[16px] text-[10px] mt-2 text-gray-600">
          {detailDataArticle?.data?.createdAt}
        </p>
        <div className="  mt-6 ">
          <p className="font-medium md:text-[16px] font-poopin">
            {detailDataArticle?.data?.content}
          </p>
          <p className="mt-4 md:text-[16px] font-medium font-poopin">
            Duis non sapien at turpis interdum lobortis. Aenean ullamcorper
            turpis sed turpis accumsan tincidunt. Nam ullamcorper congue
            suscipit. Integer nec nisi ut risus consequat volutpat. Vivamus ac
            quam ut velit viverra tempor. Phasellus aliquet neque sit amet justo
            eleifend, et malesuada libero ultrices.
          </p>
        </div>
        <div className="mt-[10rem]">
          <ArtikelKami />
        </div>
      </div>
      <div className="mt-[5rem]">
        <FooterComp />
      </div>
    </div>
  );
}
