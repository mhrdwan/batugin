import React from "react";
import Batugin_Product from "../../../public/assets/Batugin Product.png";
import Image from "next/image";

function ApaItu() {
  return (
    <div className="bg-white h-[47rem] ">
      <div className="warpnya grid grid-cols-1 md:grid-cols-2 md:ml-[7.5rem] md:mr-[7.5rem] ">
        <div>
          <Image
            className="mt-[2.6rem]"
            height={373}
            width={486}
            src={Batugin_Product}
            alt="Gambar Produk Batugin"
          />
        </div>
        <div className=" md:mt-[5.6rem]  ">
          <p className="text-secondary-2 text-[2.25rem] text-center font-semibold underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Apa itu Batugin?
          </p>
          <p className="md:text-[1.25rem] text-[0.8rem] pl-6 pr-6 md:pl-0 md:pr-0 text-center mt-5 md:text-left text-black">
            Batugin itu adalah sediaan elixir yang mengandung bahan herbal,
            seperti ekstrak daun tempuyung, ekstrak daun keji beling, dan
            bahan-bahan lainnya. Fungsi Batugin adalah untuk membantu meluruhkan
            batu urine yang terdapat di ginjal dan saluran kemih, serta membuat
            buang air kecil lebih lancar.
          </p>
          <div className="flex justify-center md:block">
            <button onClick={()=>window.open('https://www.tokopedia.com/kimiafarmaapotekos/batugin-elixir-300-ml-obat-herbal-batu-ginjal-kimia-farma',"_black")} className="bg-accents-2 border text-[1.25rem] w-11/12 pl-6 pr-6 border-accents-2 hover:text-accents-2 text-white font-semibold text-base leading-normal md:w-[10rem] h-[3.75rem] px-2 py-2 mt-[2rem] hover:bg-primary-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Beli Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApaItu;
