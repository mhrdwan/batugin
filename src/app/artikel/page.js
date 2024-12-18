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
      `/artikel/${encodeURIComponent(item?.title)
        .toLowerCase()
        .replace(/%20/g, "-")}/${item?.id}`
    );
  };
  return (
    <div className="bg-white ">
      <NavbarComp />
      <NorifReward />
      <div className="pl-[120px] pr-[120px] hidden sm:block">
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
      <div>
        {Array.isArray(dataArtikel) &&
          dataArtikel?.map((item, index) => (
            <div className="mt-9 sm:hidden pl-5 pr-5 h-[30vh]" key={index}>
              <CardArtikelList
                onClick={() => handleCardClick(item)}
                imageUrl={item?.foto}
                description={item?.content}
                title={item?.title}
              />
            </div>
          ))}
      </div>
      <FooterComp mt={"10"} />
    </div>
  );
}

export default PageArticle;
