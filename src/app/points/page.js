import React from "react";
import PagePoint from "./pages";

export const metadata = {
  title: "Batugin - Points",
  description:
    "Batugin adalah obat peluruh batu ginjal pertama di Indonesia, efektif mengatasi batu ginjal dengan bahan-bahan alami.",
  keywords:
    "batugin,points,poin, obat peluruh batu ginjal, obat ginjal, obat batu ginjal, pengobatan ginjal alami",
  authors: [{ name: "Ridwan" }],
  openGraph: {
    title: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    description:
      "Obat Peluruh Batu Ginjal PERTAMA di Indonesia dengan bahan alami.",
    url: "https://www.batugin.co.id/",
    siteName: "Batugin - Obat Peluruh Batu Ginjal PERTAMA di Indonesia",
    images: [
      {
        url: "https://www.batugin.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO%20BATUGIN-01.af8304d1.png&w=128&q=75",
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
    description:
      "Obat Peluruh Batu Ginjal PERTAMA di Indonesia dengan bahan alami.",
    image:
      "https://www.batugin.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO%20BATUGIN-01.af8304d1.png&w=128&q=75",
  },
  robots: "index, follow",
  canonical: "https://www.batugin.co.id/",
  icons: {
    icon: "./icon.png",
  },
};

export default async function Page() {

  return (
    <div>
      <PagePoint />
    </div>
  );
}
