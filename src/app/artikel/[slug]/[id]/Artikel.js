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
    maxWidth: "100%",
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
    return null;
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
      
      {/* Hero Section dengan Full Width Image */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={articleData?.foto_url || articleData?.foto}
          alt="Banner Artikel"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            {articleData?.sub_title} - {articleData?.title}
          </h1>
          <p className="text-sm md:text-base opacity-90">
            {new Date(articleData?.createdAt).toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Article Content dengan Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="md:col-span-8">
            {articleData?.content && (
              <div
                dangerouslySetInnerHTML={{ __html: articleData.content }}
                className="prose max-w-none prose-img:rounded-xl prose-headings:font-bold prose-p:text-gray-600"
                style={styles.content}
              />
            )}
          </div>
          
          {/* Sidebar */}
          {/* <div className="md:col-span-4">
            <div className="sticky top-8">
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-lg font-semibold mb-4">Poin Penting</h3>
                <PointKamu />
              </div>
            </div>
          </div> */}
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Artikel Terkait</h2>
          <ArtikelKami />
        </div>
      </div>

      <div className="mt-8">
        <FooterComp />
      </div>
    </div>
  );
}