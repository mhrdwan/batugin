import React from "react";
import senam1 from "../../../public/assets/Senam/senam1.png";
import senam2 from "../../../public/assets/Senam/senam2.png";
import senam3 from "../../../public/assets/Senam/senam3.png";
import senam4 from "../../../public/assets/Senam/senam4.png";
import Image from "next/image";
import FooterComp from "../Home/Footer";
import muri from "../../../public/assets/muri.jpeg";
const senam = [muri, muri, muri, muri,  muri,  muri,  muri, muri];
function SenamAero() {
  return (
    <>
      <div className="w-full   mt-10  pl-10 pr-10">
        <div className="flex flex-col justify-center  items-start">
          <div className="text-2xl font-medium text-black">
            Muri Batugin 
          </div>
          <div className="w-full grid grid-cols-4 gap-5 mt-10">
            {senam.map((item, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? "mt-0" : ""}`}
              >
                <Image width={200} src={item} />
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

export default SenamAero;
