import React from "react";
import Home from "./pages1";
import banner1 from "../../public/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-01.png";

export const metadata = {
  title: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
  description: "Batugin adalah obat peluruh batu ginjal pertama di Indonesia, efektif mengatasi batu ginjal dengan bahan-bahan alami.",
  keywords: "batugin, obat peluruh batu ginjal, obat ginjal, obat batu ginjal, pengobatan ginjal alami",
  authors: [{ name: "Ridwan" }],
  openGraph: {
    title: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    description: "Obat Peluruh Batu Ginjal PERTAMA di Indonesia dengan bahan alami.",
    url: "https://www.batugin.co.id/",
    siteName: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    images: [
      {
        url: "/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-01.png", 
        width: 1440,
        height: 530,
        alt: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitterCard: {
    card: "summary_large_image",
    site: "@batugin",
    title: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    description: "Obat Peluruh Batu Ginjal PERTAMA di Indonesia dengan bahan alami.",
    image: "/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-01.png",
  },
  robots: "index, follow",
  canonical: "https://www.batugin.co.id/",
  icons: {
    icon: "./icon.png",
  },
};

function pages() {
  return <Home />;
}

export default pages;
