import React from "react";
import senam1 from "../../../public/assets/Senam/senam1.png";
import senam2 from "../../../public/assets/Senam/senam2.png";
import senam3 from "../../../public/assets/Senam/senam3.png";
import senam4 from "../../../public/assets/Senam/senam4.png";
import Image from "next/image";
import FooterComp from "../Home/Footer";
import muri from "../../../public/assets/muri.jpeg";
const senam = [muri];
function SenamSehatBatugin() {
  return (
    <>
      <div className="w-full   mt-10  pl-[8.5rem] pr-10">
        <div className="flex flex-col justify-center  items-start">
          <div className="text-2xl font-medium text-black">
            Senam Sehat Bersama Batugin 
          </div>
          <div className="w-full flex justify-center mt-10">
            {senam.map((item, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? "mt-0" : ""}`}
              >
                <Image width={300} src={item} />
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

export default SenamSehatBatugin;
