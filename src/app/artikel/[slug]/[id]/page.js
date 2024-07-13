"use client";
import React, { useEffect, useState } from "react";
import NavbarComp from "@/components/NavbarComp";
import PointKamu from "@/components/PointKamu/page";
import bannerartikel from "../../../../../public/assets/bannerartikerl.png";
import Image from "next/image";
import ArtikelKami from "@/components/Home/ArtikelKami";
import FooterComp from "@/components/Home/Footer";
import { ArticleZustand } from "@/zustand/Article/article";
import Head from "next/head";

const styles = {
  content: {
    fontFamily: "'Poppins', sans-serif",
    marginTop: "6px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
};

export default function Artikel({ params }) {
  const { getDetailArticle, detailDataArticle } = ArticleZustand();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    getDetailArticle(params.id);
    setIsClient(true);
  }, [getDetailArticle, params.id]);

  if (!isClient) {
    return null; // Atau spinner/loading state
  }
  // console.log(`detailDataArticle.data?.[0]?.foto`,detailDataArticle?.data?.[0]?.foto)
  return (
    <div className="bg-white">
      <Head>
        <title>
          {detailDataArticle?.sub_title} - {detailDataArticle?.title}
        </title>
        <meta
          name="description"
          content={
            detailDataArticle?.description || detailDataArticle?.sub_title
          }
        />
        <meta
          name="keywords"
          content="batu ginjal, kesehatan, artikel kesehatan"
        />
        <meta property="og:title" content={detailDataArticle?.title} />
        <meta
          property="og:description"
          content={
            detailDataArticle?.description || detailDataArticle?.sub_title
          }
        />
        <meta property="og:image" content={detailDataArticle?.foto} />
        <meta property="og:type" content="detailDataArticle" />
        <meta
          property="og:url"
          content={`https://batugin.co.id/artikel/${detailDataArticle?.id}`}
        />
      </Head>
      <NavbarComp />
      <div className="relative h-[8.9rem] md:h-[30rem] bg-red-200 overflow-hidden">
        <Image
          src={detailDataArticle.data?.[0]?.foto}
          alt="Banner Artikel"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="pl-[1.42rem] pr-[1.42rem] md:pl-[8.5rem] md:pr-[8.5rem]">
        <h1 className="text-[12px] md:text-[24px] font-semibold text-start mt-6 font-poopin">
          <title>
            {detailDataArticle?.data?.[0]?.sub_title} -{" "}
            {detailDataArticle?.data?.[0]?.title}
          </title>
        </h1>
        <p className="text-start md:text-[16px] text-[10px] mt-2 text-gray-600">
          {detailDataArticle?.data?.[0]?.createdAt}
        </p>
        <div className="mt-6  w-full">
          {detailDataArticle?.data?.[0]?.content && (
            <div
              dangerouslySetInnerHTML={{
                __html: detailDataArticle.data[0].content,
              }}
              className="prose  "
              style={styles.content}
            ></div>
          )}
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
