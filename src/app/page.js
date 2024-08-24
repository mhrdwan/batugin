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
    siteName: "Admin Batugin",
    images: [
      {
        url: "https://batugin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER%20BATUGIN%20-%201440%20x%20530-03.8c430ccc.png&w=3840&q=75",
        width: 800,
        height: 600,
        alt: "Admin Batugin",
      },
    ],
    icon: "./icon.png",
  },
};

function pages() {
  return <Home />;
}

export default pages;
