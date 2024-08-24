import React from "react";
import Home from "./pages1";
import banner1 from "../../public/assets/BannerUtamaHome/BANNER BATUGIN - 1440 x 530-01.png";

export const metadata = {
  title: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia ",
  description: "Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
  authors: [{ name: "Ridwan" }],
  openGraph: {
    title: "Batugin",
    description: "Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    url: "https://www.batugin.co.id/",
    siteName: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    images: [
      {
        url: JSON.stringify(banner1),
        width: 800,
        height: 600,
        alt: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
      },
    ],
    icon: "./icon.png",
  },
};

function pages() {
  return <Home />;
}

export default pages;
