"use client";
import CardArtikelList from "@/components/Artikel/CardArtikelList";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import PointKamu from "@/components/PointKamu/page";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api/baseUrl";
import axios from "axios";
import FooterComp from "@/components/Home/Footer";
import { useRouter } from "next/navigation";

function PageArticle() {
  const router = useRouter();
  const [dataArtikel, setdataArtikel] = useState("");
  async function getArtikel() {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article?page=1&limit=9999`
      );
      console.log(`ini response`, response.data.data);
      setdataArtikel(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArtikel();
  }, []);

  const handleCardClick = (item) => {
    console.log("Card clicked with id:", item);
    router.push(
      `/artikel/${item?.sub_title
        ?.toLowerCase() // Ubah ke huruf kecil
        .replace(/[^a-z0-9\s-]/g, "") // Hapus karakter spesial
        .trim() // Hapus spasi di awal dan akhir
        .replace(/\s+/g, "-") // Ganti spasi dengan tanda hubung
        .replace(/-+/g, "-")}/${item?.no}`
    );
    // Lakukan sesuatu, seperti navigasi ke halaman detail artikel
  };
  return (
    <div className="bg-white h-screen">
      <NavbarComp />
      <NorifReward />
      <div className="pl-[120px] pr-[120px]">
        <div className="mt-14">
          {Array.isArray(dataArtikel) &&
            dataArtikel?.map((item, index) => (
              <div className="mt-9" key={index}>
                <CardArtikelList
                  onClick={() => handleCardClick(item)}
                  imageUrl={item?.foto}
                  description={item?.content}
                  title={item?.title}
                />
              </div>
            ))}
        </div>
      </div>
      <FooterComp mt={"10"} />
    </div>
  );
}

export default PageArticle;
