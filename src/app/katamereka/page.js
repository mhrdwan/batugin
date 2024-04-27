"use client";
import FooterComp from "@/components/Home/Footer";
import Katamereka from "@/components/KataMereka/Katamereka";
import NavbarComp from "@/components/NavbarComp";
import NorifReward from "@/components/NorifReward";
import React from "react";

const datanya = [
  {
    id: 1,
    nama: "Alif",
    umur: "22",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzZZjJqrvQ186KxaLqjts3EJyDZDgqAgDW6mqm4m0qzRXCwDUIoNfjvqT9QbBQgne1zA&usqp=CAU",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 2,
    nama: "Budi",
    umur: "25",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKQOT7CRf62gbmctgqdmlpU6FChFa9ZsOLUTcQhVW5jpLjF4LNyvT96lzeWwrcb7Srs8&usqp=CAU",
    desc: "Jamu Indonesia: Tradisi dan Inovasi.",
  },
  {
    id: 3,
    nama: "Citra",
    umur: "30",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8mwtMEo2ugbJcjE9H_lzrhE-LtK1NMlUuE6zNCc1oAQ6YYfQm6sKWAv716TB-4pv3Ug&usqp=CAU",
    desc: "Manfaat Jamu untuk Kesehatan Tubuh.",
  },
  {
    id: 4,
    nama: "Dewi",
    umur: "28",
    gambar:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713830400&semt=ais",
    desc: "Inovasi Baru dalam Pembuatan Jamu Tradisional.",
  },
  {
    id: 5,
    nama: "Eka",
    umur: "35",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vJsLUiOLgXXcz2hWEp-wQybdp3WXgWneKNf6XpfKn8I5J18tQkAJTBuo6DJsbbMb-UU&usqp=CAU",
    desc: "Khasiat Jamu untuk Menyembuhkan Penyakit Umum.",
  },
  {
    id: 6,
    nama: "Fajar",
    umur: "32",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-s1xDS99ObOy8awteQXed_bRgjc-DlXIaL_bKXLFesZidTQvgYlak3m-PtW4aYyVDEHc&usqp=CAU",
    desc: "Mengenal Berbagai Jenis Jamu dan Manfaatnya.",
  },
];

function KataMereka() {
  return (
    <div>
      <NavbarComp />
      <NorifReward />
      <style>
        {`.adjust-first-item {
  margin-top: 1;  /* Contoh: Menghilangkan margin tambahan */
}
`}
      </style>
      <div className="flex justify-center mt-[40px] mb-[40px]">
        <div className="Frame152 flex justify-end w-64 h-28 flex-col  items-center gap-2.5 ">
          <div className="KataMereka text-center text-yellow-900 text-4xl font-medium font-['Poppins']">
            Kata Mereka.
          </div>
          <div className="Rectangle6 self-stretch h-1 bg-gradient-to-r from-red-800 to-red-600" />
          <div className="TestimoniBatuginMereka text-center text-zinc-600 text-xl font-medium font-['Poppins']">
            Testimoni Batugin mereka
          </div>
        </div>
      </div>
      <div className="space-y-5  pl-[120px] pr-[120px] md:grid grid-cols-3  hidden">
        {datanya &&
          datanya.map((item, index) => (
            <div
              className={`flex flex-col items-center p-10 ${
                index === 0 ? "mt-5" : ""
              } h-[495px] max-w-sm text-base font-medium border border-solid border-neutral-400`}
            >
              <img
                key={index}
                loading="lazy"
                srcSet={item.gambar}
                className={`max-w-full aspect-square ${
                  index == 0 ? " w-[120px]" : " w-[120px]"
                }`}
              />
              <div className="mt-10 text-2xl text-red-600">{item.nama}</div>
              <div className="shrink-0 mt-2 h-1 bg-red-600 w-[194px]" />
              <div className="mt-6 text-neutral-400">{item.umur} Tahun</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/550c1f47c7f56604f9e67eb52e04b16e6c060ae10af9544e1ff20030e54d5db5?"
                className="mt-6 max-w-full aspect-[5] w-[120px]"
              />
              <div className="self-stretch mt-6 text-center text-zinc-600">
                “{item.desc} “
              </div>
            </div>
          ))}
      </div>
      <div className="mt-10">
        <FooterComp />
      </div>
    </div>
  );
}

export default KataMereka;
