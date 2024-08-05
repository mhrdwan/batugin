"use client";
import FooterComp from "@/components/Home/Footer";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import React, { useEffect } from "react";
import Image from "next/image";
import katamere1 from "../../../public/assets/katamereka/Ashanty.png";
import katamere2 from "../../../public/assets/katamereka/Rasidin Karyana Founder Sinar Jaya Group.png";
import katamere3 from "../../../public/assets/katamereka/Suharto GM ASDP PT. Ferry Indonesia.png";
import katamere4 from "../../../public/assets/katamereka/Walikota tangerang.png";
import { katamerekaZustandStore } from "@/zustand/katamereka/katamereka";

const testimonials = [
  {
    id: 1,
    name: "Ashanty Penyanyi",
    age: "Penyanyi",
    image: katamere1,
    desc: "“Hati-hati batu ginjal, batu ginjal! Yuk minum batugin 1 hari 1 teguk untuk mencegah batu ginjal.”",
  },
  {
    id: 2,
    name: "Rasidin Karyana ",
    age: "Founder Sinar Jaya Group",
    image: katamere2,
    desc: "“Saya merasakan perubahan besar setelah minum Batugin, buang air kecil jadi lancar. Batugin menyelamatkan saya dari batu ginjal dan anyang-anyangan yang rasanya tidak nyaman.”",
  },
  {
    id: 3,
    name: "Suharto ",
    age: "GM ASDP PT. Ferry Indonesia",
    image: katamere3,
    desc: "“Saya divonis dokter terkena batu ginjal dan disarankan untuk mengkonsumsi Batugin Elixir. Setelah mengkonsumsi 2 botol, saat saya buang air kecil ada terasa batu keluar dan batu ginjal saya hilang. Hingga saat ini saya rutin mengkonsumsi Batugin.”",
  },
  {
    id: 4,
    name: "Drs. H. Sachrudin ",
    age: "Wakil Walikota Tangerang",
    image: katamere4,
    desc: "“Terima kasih kepada Batugin atas kerjasamanya untuk mengadakan aktivitas yang menyehatkan sambil memberikan informasi dan edukasi terkait batu ginjal.”",
  },
];

function KataMereka() {
  const { fetchGetList, dataFetchGetList } = katamerekaZustandStore();
  useEffect(() => {
    fetchGetList();
  }, []);

  return (
    <div className="bg-white">
      <NavbarComp />
      <NorifReward />
      <div className="flex justify-center mt-10 mb-10">
        <div className="text-center">
          <div className="text-yellow-900 text-4xl font-medium font-['Poppins']">
            Kata Mereka
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-red-800 to-red-600 mt-2 mb-4"></div>
          <div className="text-zinc-600 text-xl font-medium font-['Poppins']">
            Testimoni Batugin Mereka
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {dataFetchGetList?.data?.map((item) => (
          <div
            key={item.no}
            className="flex flex-col items-center p-10 border border-neutral-400"
          >
            <Image
              loading="lazy"
              src={item.foto}
              alt={item.name}
              width={120}
              height={120}
              className="object-cover rounded-full"
            />
            <div className="mt-6 text-xl text-red-600 text-center">
              {item.name}
            </div>
            <div className="w-full h-1 bg-red-600 mt-2 mb-4"></div>
            <div className="text-neutral-400 text-center">
              {item.pekerjaan} 
            </div>
            <div className="text-center text-zinc-600 mt-6">
              {item.testimoni}
            </div>
          </div>
        ))}
      </div>
      <FooterComp mt={5} />
    </div>
  );
}

export default KataMereka;
