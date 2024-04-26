import React from "react";
import senam1 from "../../../public/assets/Senam/senam1.png";
import senam2 from "../../../public/assets/Senam/senam2.png";
import senam3 from "../../../public/assets/Senam/senam3.png";
import senam4 from "../../../public/assets/Senam/senam4.png";
import Image from "next/image";
import FooterComp from "../Home/Footer";

const senam = [senam1, senam2, senam3, senam4, senam1, senam2, senam3, senam4];
function SenamAero() {
  return (
    <>
      <div className="w-full   mt-10  pl-10 pr-10">
        <div className="flex flex-col items-start">
          <div className="text-2xl font-medium text-black">
            Senam Aerobic BUMN
          </div>
          <div className="w-full grid grid-cols-4 space-y-5 mt-10">
            {senam.map((item, index) => (
              <Image src={item} key={index} />
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
