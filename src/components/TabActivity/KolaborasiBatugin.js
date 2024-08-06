import SwipperKolaborasi from "../Swipper/SwipperKolaborasi/SwipperKolaborasi";
import React from "react";
import FollowBatugin from "../Home/Follow";
import FooterComp from "../Home/Footer";
import gambar from "../../../public/assets/Kolaborasi Point/2d0c14b9-89a6-434c-bec4-783ae5e7e10f.jpeg";
import gambar2 from "../../../public/assets/Kolaborasi Point/716bea46-1d5e-451e-9b58-87cfc58a6917.jpeg";
import gambar3 from "../../../public/assets/Kolaborasi Point/112523f8-066b-4879-a5dc-1d547b694db8.jpeg";
import gambar4 from "../../../public/assets/Kolaborasi Point/be0e7fca-23d0-4e2c-899d-a1ba2be1f1ca.jpeg";
import gambar5 from "../../../public/assets/Kolaborasi Point/c776d2e3-68b5-4e71-ac35-b47aa772d1ff.jpeg";
import gambar6 from "../../../public/assets/Kolaborasi Point/fda90b68-434a-4f51-9798-b926157bceec.jpeg";
import gambar7 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-05-30 at 9.10.36 AM.jpeg";
import gambar8 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-05-31 at 3.10.00 PM.jpeg";
import gambar9 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-06-05 at 2.34.48 PM.jpeg";
import gambar10 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-07-03 at 1.29.54 PM.jpeg";
import gambar11 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-07-04 at 12.34.59 PM.jpeg";
import gambar12 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-07-22 at 6.53.25 AM.jpeg";
import gambar13 from "../../../public/assets/Kolaborasi Point/WhatsApp Image 2024-07-23 at 5.20.59 AM.jpeg";
import Image from "next/image";

const gambarValue = [
  gambar,
  gambar2,
  gambar3,
  gambar4,
  gambar5,
  gambar6,
  gambar7,
  gambar8,
  gambar9,
  gambar10,
  gambar11,
  gambar12,
  gambar13,
];
function KolaborasiBatugin() {
  return (
    <div className="mt-5">
      {/* <FollowBatugin/> */}
      <div className="">
        <SwipperKolaborasi />
      </div>
      <div className="md:pr-[8.5rem] md:pl-[8.5rem] mt-10 pl-5 pr-5">
        <p>
          Kolaborasi Batugin untuk kesehatan ginjal masyarakat Indonesia.
          Sebagai pelopor obat peluruh batu ginjal pertama di Indonesia, kami di
          Batugin selalu berkomitmen untuk memberikan edukasi dan menyadarkan
          masyarakat tentang bahaya batu ginjal. Kami percaya bahwa upaya
          pencegahan sama pentingnya dengan pengobatan, dan oleh karena itu,
          kami aktif mengedukasi masyarakat mengenai pentingnya menjaga
          kesehatan ginjal. Misi Edukasi dan Penyadaran Dalam rangka
          meningkatkan kesadaran masyarakat tentang bahaya batu ginjal, kami
          telah melaksanakan berbagai aktivitas edukatif dan kolaboratif. Kami
          menyadari bahwa penyebaran informasi yang tepat dan efektif sangat
          diperlukan untuk menjangkau masyarakat luas. Kolaborasi dengan Jasa
          Marga Pada mudik Lebaran 2024, kami bekerja sama dengan Jasa Marga
          untuk memasang banner mengenai bahaya batu ginjal di berbagai rest
          area. Inisiatif ini bertujuan untuk menjangkau para pemudik yang
          berada di jalur mudik, sehingga pesan penting tentang pencegahan dan
          pengobatan batu ginjal dapat diterima oleh khalayak luas.
          Banner-banner informatif ini diharapkan dapat memberikan edukasi
          kepada masyarakat tentang pentingnya menjaga kesehatan ginjal selama
          perjalanan mudik, terutama dengan memperhatikan pola minum dan asupan
          makanan. Senam Bersama Kemenpora dan Puteri Indonesia Pada tahun 2023
          lalu, kami mengadakan acara senam bersama Kementerian Pemuda dan
          Olahraga (Kemenpora) serta Puteri Indonesia. Acara ini tidak hanya
          bertujuan untuk mempromosikan gaya hidup sehat, tetapi juga untuk
          mengedukasi masyarakat mengenai pentingnya aktivitas fisik dalam
          mencegah batu ginjal. Dengan adanya dukungan dari tokoh-tokoh publik
          dan institusi pemerintah, pesan kesehatan ini dapat lebih mudah
          diterima dan diikuti oleh masyarakat. Dampak Positif dan Komitmen
          Berkelanjutan Langkah-langkah yang telah kami lakukan menunjukkan
          komitmen kami dalam memberikan kontribusi positif bagi kesehatan
          masyarakat Indonesia. Edukasi dan penyadaran yang kami lakukan
          diharapkan dapat mengurangi prevalensi batu ginjal di Indonesia dan
          meningkatkan kualitas hidup masyarakat. Kami di Batugin terus
          berkomitmen untuk menjalankan misi edukasi dan penyadaran ini secara
          berkelanjutan. Dengan berbagai program dan kolaborasi yang inovatif,
          kami berharap dapat terus memberikan manfaat dan solusi terbaik bagi
          kesehatan ginjal masyarakat Indonesia. Melalui upaya-upaya ini, kami
          tidak hanya dikenal sebagai obat peluruh batu ginjal pertama di
          Indonesia, tetapi juga sebagai pionir dalam kampanye kesehatan ginjal
          yang menyeluruh dan berdampak luas. Dengan dukungan dari masyarakat
          dan berbagai pihak, kami siap melanjutkan misi kami dalam meningkatkan
          kesehatan ginjal di Indonesia.
        </p>
      </div>
      <div className="flex flex-wrap mt-5 sm:p-32">
        {gambarValue.map((item, index) => (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 p-5">
            <Image
              className="object-cover w-full h-full"
              src={item}
              width={200}
              height={200}
              alt={`Gambar Kolaborasi Batugin ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <FooterComp />
      </div>
    </div>
  );
}

export default KolaborasiBatugin;
