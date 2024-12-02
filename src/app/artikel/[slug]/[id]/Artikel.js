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
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    getDetailArticle(params.id);
    setIsClient(true);
  }, [getDetailArticle, params.id]);

  if (!isClient || !detailDataArticle) {
    return null;
  }

  const articleData = detailDataArticle?.data;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>{articleData?.title}</title>
        <meta
          name="description"
          content={articleData?.description || articleData?.sub_title}
        />
        <meta
          name="keywords"
          content="batu ginjal, kesehatan, artikel kesehatan"
        />
        <meta property="og:title" content={articleData?.title} />
        <meta
          property="og:description"
          content={articleData?.description || articleData?.sub_title}
        />
        <meta property="og:image" content={articleData?.foto} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://batugin.co.id/artikel/${articleData?.id}`}
        />
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
            {articleData?.title}
          </h1>
          <p className="text-sm md:text-base opacity-90">
            {new Date(articleData?.createdAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Article Content dengan Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          {/* Main Content */}
          <div className="lg:col-span-8 px-4 lg:px-0">
            {articleData?.content && (
              <div
                dangerouslySetInnerHTML={{ __html: articleData.content }}
                className="prose prose-sm md:prose lg:prose-lg xl:prose-xl 
        max-w-none md:max-w-2xl lg:max-w-3xl mx-auto 
        prose-img:rounded-xl prose-img:w-full
        prose-headings:font-bold prose-p:text-gray-600 
        prose-p:leading-relaxed
        prose-headings:text-gray-900
        prose-li:text-gray-600
        prose-ul:space-y-2 prose-ol:space-y-2"
                style={{
                  ...styles.content,
                  overflow: "hidden",
                  wordWrap: "break-word",
                }}
              />
            )}
          </div>

          {/* New Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Share Article Box */}
              <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Bagikan Artikel</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodeURIComponent(
                          `${articleData?.title} ${window.location.href}`
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                    </svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          `${articleData?.title} ${window.location.href}`
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm relative flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    {copied ? (
                      <span className="animate-fade-up absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded">
                        Link Tersalin!
                      </span>
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
              {/* Quick Navigation */}
              {/* Quick Navigation */}
              {/* Quick Navigation */}
              {/* <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
                <nav className="space-y-2">
                  <a
                    href="#apa-itu-batu-ginjal"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Apa itu Batu Ginjal?
                  </a>
                  <a
                    href="#gejala-batu-ginjal"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Gejala Batu Ginjal
                  </a>
                  <a
                    href="#pengobatan-batu-ginjal"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Pengobatan Batu Ginjal
                  </a>
                  <a
                    href="#pencegahan-batu-ginjal"
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Pencegahan Batu Ginjal
                  </a>
                </nav>
              </div> */}
            </div>

            {/* Contact Box */}
            {/* <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Butuh Konsultasi?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Konsultasikan masalah kesehatan Anda dengan tim ahli kami
              </p>
              <a
                href="https://wa.me/+6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Hubungi via WhatsApp
              </a>
            </div> */}
          </div>
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
