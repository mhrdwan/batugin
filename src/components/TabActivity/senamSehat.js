import React from "react";
import senam1 from "../../../public/assets/senamSehat Batugin.JPG";
import senam2 from "../../../public/assets/senamSehat Batugin2.JPG";
import batuginkotatua from "../../../public/assets/batuginkotatua.jpeg";
import batuginkotatua2 from "../../../public/assets/batuginkotatua2.jpeg";
import Image from "next/image";
import FooterComp from "../Home/Footer";

const senam = [
  {
    image: senam1,
    title: "Senam Sehat Batugin Bersama Kemenpora RI dan Puteri Indonesia",
    description:
      "Kerja sama Batugin dengan Kementerian Pemuda dan Olahraga Republik Indonesia dalam acara Road to Haornas 2023 Zumba Fit & Fabulous with Puteri Indonesia di Velodrome Rawamangun pada 8 September 2023.",
  },
  {
    image: senam2,
    title: "Bergerak Bersama Batugin Kota Tangerang",
    description:
      "Batugin bekerja sama dengan diaspora Kota Tangerang melaksanakan acara 'Bergerak Bersama Batugin' di Stadion Benteng Reborn.",
  },
];

function SenamSehatBatugin() {
  return (
    <>
      {/* ini pc */}
      <div className="w-full mt-10 pl-[8.5rem] pr-10 hidden sm:block">
        <div className="flex flex-col">
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Senam Sehat Batugin Bersama Kemenpora RI dan Puteri
                    Indonesia
                  </div>
                  <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
                    Kerja sama Batugin dengan Kementerian Pemuda dan Olahraga
                    Republik Indonesia dalam acara Road to Haornas 2023 Zumba
                    Fit & Fabulous with Puteri Indonesia di Velodrome Rawamangun
                    pada 8 September 2023.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={senam1}
                  className="grow w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Bergerak Bersama Batugin Kota Tangerang
                  </div>
                  <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
                    Batugin bekerja sama dengan diaspora Kota Tangerang
                    melaksanakan acara 'Bergerak Bersama Batugin' di Stadion
                    Benteng Reborn.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={senam2}
                  className="grow w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Senam Ginjal Sehat Batugin Kolaborasi dengan Kemenpora RI
                  </div>
                  <div
                    className="mt-5 text-base tracking-wide leading-7 text-zinc-700 max-md:max-w-full"
                    style={{ textAlign: "justify" }}
                  >
                    Batugin Bersama Kementerian Pemuda dan Olahraga RI
                    berkolaborasi untuk menciptakan gerakan senam yang
                    bermanfaat untuk kesehatan ginjal. Pada bulan Juli 2024
                    Batugin bekerja sama dengan komunitas “CSM MEO” untuk
                    menyelenggarakan acara "Senam Ginjal Sehat" di kawasan Kota
                    Tua Jakarta dengan menghadirkan Guest Star Official Zumba
                    Ambassador Indonesia Liza Natalia sebagai launching Senam
                    Ginjal Sehat untuk pertama kalinya. Acara tersebut berhasil
                    menarik lebih dari 3000 peserta yang antusias untuk
                    berpartisipasi dalam senam massal.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={batuginkotatua}
                  className="grow w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full"
                />
                <Image
                  loading="lazy"
                  src={batuginkotatua2}
                  className="grow w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full mt-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="text-xl font-semibold tracking-wide leading-7 text-black max-md:max-w-full">
              Tentang Batugin
            </div>
            <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
              Batugin memahami betapa pentingnya menjaga kesehatan ginjal untuk
              kehidupan yang berkualitas. Kami berkomitmen untuk menyebarkan
              kesadaran tentang pentingnya kesehatan ginjal.
              <br />
              Kami bekerja sama dengan berbagai pihak untuk menyelenggarakan
              acara senam dan zumba sehat. Acara ini bukan hanya tentang
              berolahraga, tetapi juga sarana edukasi tentang kesehatan ginjal.
              <br />
              Dalam setiap acara, kami mengajak peserta untuk bergerak aktif
              melalui gerakan senam dan zumba yang energik, sekaligus memberikan
              informasi penting tentang cara menjaga kesehatan ginjal.
              <br />
              Kami bangga bermitra dengan lembaga kesehatan, komunitas olahraga,
              dan influencer kesehatan untuk menciptakan acara bermanfaat bagi
              masyarakat.
              <br />
              Selain acara senam dan zumba sehat, kami memberikan informasi
              tentang produk Batugin yang membantu menjaga kesehatan ginjal,
              seperti suplemen untuk mengurangi risiko batu ginjal dan menjaga
              fungsi ginjal optimal.
              <br />
              Kami berharap melalui inisiatif ini, kami dapat terus
              berkontribusi dalam upaya menyehatkan masyarakat dan meningkatkan
              kesadaran akan pentingnya menjaga kesehatan ginjal. Bersama-sama,
              mari kita jaga kesehatan ginjal dan hidup sehat untuk masa depan
              yang lebih baik.{" "}
            </div>
          </div>
        </div>
      </div>
      {/* ini hp */}
      <div className="w-full mt-16 pl-10 pr-10 sm:hidden">
        <div className="flex flex-col">
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Senam Sehat Batugin Bersama Kemenpora RI dan Puteri
                    Indonesia
                  </div>
                  <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
                    Kerja sama Batugin dengan Kementerian Pemuda dan Olahraga
                    Republik Indonesia dalam acara Road to Haornas 2023 Zumba
                    Fit & Fabulous with Puteri Indonesia di Velodrome Rawamangun
                    pada 8 September 2023.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={senam1}
                  className="grow w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Bergerak Bersama Batugin Kota Tangerang
                  </div>
                  <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
                    Batugin bekerja sama dengan diaspora Kota Tangerang
                    melaksanakan acara 'Bergerak Bersama Batugin' di Stadion
                    Benteng Reborn.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={senam2}
                  className="grow w-full aspect-[2.94] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-semibold tracking-wide text-black max-md:max-w-full">
                    Senam Ginjal Sehat Batugin Kolaborasi dengan Kemenpora RI
                  </div>
                  <div
                    style={{ textAlign: "justify" }}
                    className="mt-5 text-base tracking-wide leading-7 text-zinc-700 max-md:max-w-full"
                  >
                    Batugin Bersama Kementerian Pemuda dan Olahraga RI
                    berkolaborasi untuk menciptakan gerakan senam yang
                    bermanfaat untuk kesehatan ginjal. Pada bulan Juli 2024
                    Batugin bekerja sama dengan komunitas “CSM MEO” untuk
                    menyelenggarakan acara "Senam Ginjal Sehat" di kawasan Kota
                    Tua Jakarta dengan menghadirkan Guest Star Official Zumba
                    Ambassador Indonesia Liza Natalia sebagai launching Senam
                    Ginjal Sehat untuk pertama kalinya. Acara tersebut berhasil
                    menarik lebih dari 3000 peserta yang antusias untuk
                    berpartisipasi dalam senam massal.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  loading="lazy"
                  src={batuginkotatua}
                  className="grow w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full"
                />
                <Image
                  loading="lazy"
                  src={batuginkotatua2}
                  className="grow w-full aspect-[1.94] max-md:mt-10 max-md:max-w-full mt-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-10 w-full bg-white border border-solid border-stone-300 max-md:max-w-full">
            <div className="text-xl font-semibold tracking-wide leading-7 text-black max-md:max-w-full">
              Tentang Batugin
            </div>
            <div className="mt-5 text-base tracking-wide leading-7 text-zinc-600 max-md:max-w-full">
              Batugin memahami betapa pentingnya menjaga kesehatan ginjal untuk
              kehidupan yang berkualitas. Kami berkomitmen untuk menyebarkan
              kesadaran tentang pentingnya kesehatan ginjal.
              <br />
              Kami bekerja sama dengan berbagai pihak untuk menyelenggarakan
              acara senam dan zumba sehat. Acara ini bukan hanya tentang
              berolahraga, tetapi juga sarana edukasi tentang kesehatan ginjal.
              <br />
              Dalam setiap acara, kami mengajak peserta untuk bergerak aktif
              melalui gerakan senam dan zumba yang energik, sekaligus memberikan
              informasi penting tentang cara menjaga kesehatan ginjal.
              <br />
              Kami bangga bermitra dengan lembaga kesehatan, komunitas olahraga,
              dan influencer kesehatan untuk menciptakan acara bermanfaat bagi
              masyarakat.
              <br />
              Selain acara senam dan zumba sehat, kami memberikan informasi
              tentang produk Batugin yang membantu menjaga kesehatan ginjal,
              seperti suplemen untuk mengurangi risiko batu ginjal dan menjaga
              fungsi ginjal optimal.
              <br />
              Kami berharap melalui inisiatif ini, kami dapat terus
              berkontribusi dalam upaya menyehatkan masyarakat dan meningkatkan
              kesadaran akan pentingnya menjaga kesehatan ginjal. Bersama-sama,
              mari kita jaga kesehatan ginjal dan hidup sehat untuk masa depan
              yang lebih baik.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <FooterComp />
      </div>
    </>
  );
}

export default SenamSehatBatugin;
