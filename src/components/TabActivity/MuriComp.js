import React from "react";
import Image from "next/image";
import FooterComp from "../Home/Footer";
import muri from "../../../public/assets/muri.jpeg";

const senam = [muri];

function MuriComp() {
  return (
    <>
      <div className="w-full mt-[150px] px-10 ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-medium mb-5 text-center">Muri Batugin</div>
          <div className="w-full flex justify-center">
            {senam.map((item, index) => (
              <div key={index} className="relative w-full max-w-xl">
                <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200 text-center">
                  <Image width={300} height={200} src={item} alt="Muri Batugin" layout="intrinsic" className="mx-auto"/>
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    Batugin, merasa luar biasa senang dan bangga atas pencapaian kami dalam meraih Rekor MURI pada
                    peringatan Hari Ginjal Sedunia di tahun 2023. Acara ini bukan hanya tentang memecahkan rekor,
                    tetapi juga tentang komitmen kami sebagai agen perubahan dalam kesehatan ginjal di Indonesia.
                    Sebagai obat peluruh batu ginjal terkemuka, kami sadar akan tanggung jawab besar yang kami miliki
                    dalam menjaga kesehatan ginjal masyarakat. Oleh karena itu, kami tidak hanya fokus pada
                    pengembangan produk yang efektif, tetapi juga aktif dalam memberikan edukasi tentang pentingnya
                    menjaga kesehatan ginjal. Acara edukasi berskala besar kepada 1000 driver secara serentak adalah
                    salah satu wujud nyata dari komitmen kami. Kami percaya bahwa dengan memberikan informasi yang
                    tepat dan aksesibel, kami dapat membantu masyarakat memahami betapa pentingnya peran ginjal dalam
                    kesehatan keseluruhan tubuh. Rekor MURI yang kami raih menjadi bukti bahwa kami tidak hanya
                    berbicara, tetapi juga bertindak nyata dalam menjaga kesehatan ginjal. Ini adalah langkah awal
                    dari banyak inisiatif yang akan kami lakukan untuk terus memberikan dampak positif bagi
                    masyarakat. Terima kasih kepada semua yang telah mendukung kami dalam perjalanan ini.
                    Bersama-sama, mari kita jaga kesehatan ginjal dan berkomitmen untuk hidup sehat demi masa depan
                    yang lebih baik bagi kita semua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FooterComp />
      </div>
    </>
  );
}

export default MuriComp;
