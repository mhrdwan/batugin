import React from "react";
import senam1 from "../../../public/assets/senamSehat Batugin.JPG";
import senam2 from "../../../public/assets/senamSehat Batugin2.JPG";
import Image from "next/image";
import FooterComp from "../Home/Footer";

const senam = [
  {
    image: senam1,
    title: "Senam Sehat 1",
    description: "Kerja sama Batugin dengan Kementerian Pemuda dan Olahraga Republik Indonesia dalam acara Road to Haornas 2023 Zumba Fit & Fabulous with Puteri Indonesia di Velodrome Rawamangun pada 8 September 2023."
  },
  {
    image: senam2,
    title: "Senam Sehat 2",
    description: "Batugin bekerja sama dengan diaspora Kota Tangerang melaksanakan acara 'Bergerak Bersama Batugin' di Stadion Benteng Reborn."
  }
];

function SenamSehatBatugin() {
  return (
    <>
      <div className="w-full mt-10 pl-[8.5rem] pr-10">
        <div className="text-3xl font-semibold text-black mb-6">
          Senam Sehat Bersama Batugin
        </div>
        <div className="flex justify-between items-stretch">
          {senam.map((item, index) => (
            <div key={index} className="flex flex-col w-1/2 max-w-md p-4 bg-white rounded-lg shadow-xl m-2">
              <div className="relative w-full h-64 mb-4">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <div className="flex flex-col justify-between p-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10">
          <div className="font-bold text-xl mb-4">Tentang Batugin</div>
          <p className="text-gray-700 text-base mb-2">
            Batugin memahami betapa pentingnya menjaga kesehatan ginjal untuk kehidupan yang berkualitas. Kami berkomitmen untuk menyebarkan kesadaran tentang pentingnya kesehatan ginjal.
          </p>
          <p className="text-gray-700 text-base mb-2">
            Kami bekerja sama dengan berbagai pihak untuk menyelenggarakan acara senam dan zumba sehat. Acara ini bukan hanya tentang berolahraga, tetapi juga sarana edukasi tentang kesehatan ginjal.
          </p>
          <p className="text-gray-700 text-base mb-2">
            Dalam setiap acara, kami mengajak peserta untuk bergerak aktif melalui gerakan senam dan zumba yang energik, sekaligus memberikan informasi penting tentang cara menjaga kesehatan ginjal.
          </p>
          <p className="text-gray-700 text-base mb-2">
            Kami bangga bermitra dengan lembaga kesehatan, komunitas olahraga, dan influencer kesehatan untuk menciptakan acara bermanfaat bagi masyarakat.
          </p>
          <p className="text-gray-700 text-base mb-2">
            Selain acara senam dan zumba sehat, kami memberikan informasi tentang produk Batugin yang membantu menjaga kesehatan ginjal, seperti suplemen untuk mengurangi risiko batu ginjal dan menjaga fungsi ginjal optimal.
          </p>
          <p className="text-gray-700 text-base">
            Kami berharap melalui inisiatif ini, kami dapat terus berkontribusi dalam upaya menyehatkan masyarakat dan meningkatkan kesadaran akan pentingnya menjaga kesehatan ginjal. Bersama-sama, mari kita jaga kesehatan ginjal dan hidup sehat untuk masa depan yang lebih baik.
          </p>
        </div>
      </div>
      <div className="mt-[20px]">

      <FooterComp />
      </div>
    </>
  );
}

export default SenamSehatBatugin;
