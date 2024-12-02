"use client";
import React, { useEffect, useState } from "react";
import NavbarComp from "@/components/NavbarComp";
import PointKamu from "@/components/PointKamu/page";
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

  if (!isClient || !detailDataArticle) {
    return null; // Atau spinner/loading state
  }

  const articleData = detailDataArticle?.data;

  return (
    <div className="bg-white">
      <Head>
        <title>{articleData?.sub_title} - {articleData?.title}</title>
        <meta name="description" content={articleData?.description || articleData?.sub_title} />
        <meta name="keywords" content="batu ginjal, kesehatan, artikel kesehatan" />
        <meta property="og:title" content={articleData?.title} />
        <meta property="og:description" content={articleData?.description || articleData?.sub_title} />
        <meta property="og:image" content={articleData?.foto} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://batugin.co.id/artikel/${articleData?.id}`} />
        <meta property="og:author" content="Ridwan" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <NavbarComp />
      <div className="relative bg-red-200 overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          // src={articleData?.foto}
          alt="Banner Artikel"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        />
      </div>

      <div className="pl-[1.42rem] pr-[1.42rem] md:pl-[8.5rem] md:pr-[8.5rem]">
        <h1 className="text-[12px] md:text-[24px] font-semibold text-start mt-6 font-poopin">
          {articleData?.sub_title} - {articleData?.title}
        </h1>
        <p className="text-start md:text-[16px] text-[10px] mt-2 text-gray-600">
          {articleData?.createdAt}
        </p>
        <div className="mt-6 w-full">
          {articleData?.content && (
            <div
              dangerouslySetInnerHTML={{ __html: articleData.content }}
              className="prose"
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
