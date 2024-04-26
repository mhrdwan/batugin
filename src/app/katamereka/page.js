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
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 2,
    nama: "Alif",
    umur: "22",
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 3,
    nama: "Alif",
    umur: "22",
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 4,
    nama: "Alif",
    umur: "22",
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 5,
    nama: "Alif",
    umur: "22",
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
  },
  {
    id: 6,
    nama: "Alif",
    umur: "22",
    gambar: "https://via.placeholder.com/120x120",
    desc: "Negara-negara yang membuat ekspor Jamu Indonesia meningkat di tahun 2023.",
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
          datanya.map((item,index) => (
            <div className={`Frame155  w-96 h-96 p-10 border mt-[20px] border-neutral-400 flex-col justify-start items-center gap-5 inline-flex ${index === 0 ? 'adjust-first-item' : ''}`}>
              <img
                className="Rectangle24 w-28 h-28 rounded-full"
                src={item.gambar}
              />
              <div className="Frame9 self-stretch h-72 flex-col justify-center items-center gap-6 flex">
                <div className="Frame85 flex-col justify-start items-start gap-2 flex">
                  <div className="GunawanIlham text-red-600 text-2xl font-medium font-['Poppins']">
                    {item.nama}
                  </div>
                  <div className="Rectangle7 self-stretch h-1 bg-gradient-to-r from-red-800 to-red-600" />
                </div>
                <div className="Tahun text-neutral-400 text-base font-medium font-['Poppins']">
                  {item.umur}
                </div>
                <div className="Rating justify-start items-start inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturLectusEtOrciFaucibusTellusProinMauris self-stretch text-center text-zinc-600 text-base font-medium font-['Poppins']">
                  {item.desc}
                </div>
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
