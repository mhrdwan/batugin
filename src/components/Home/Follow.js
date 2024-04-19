import React from "react";
import ig1 from "../../../public/assets/ig1.png";
import ig2 from "../../../public/assets/ig2.png";
import ig3 from "../../../public/assets/ig3.png";
import Image from "next/image";

function FollowBatugin() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-[10rem] mb-[10rem] hidden md:block pl-10 pr-10">
        <p className="font-semibold underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 text-[1.5rem]">
          Yuk, Follow Batugin!
        </p>
        <p className="font-normal mt-3 text-[1rem] text-neutral-3">
          Cek keseruan kami di Instagram
        </p>
        <div className="instagram grid  grid-cols-4 gap-4 mt-[3rem]">
          <Image src={ig1} width={250} height={250} layout="fixed" />
          <Image src={ig2} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
        </div>
      </div>
      <div className=" mt-[10rem] md:hidden pl-10 pr-10 mb-[10rem]">
        <p className="font-semibold underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 text-[1.5rem]">
          Yuk, Follow Batugin!
        </p>
        <p className="font-normal mt-3 text-[1rem] text-neutral-3">
          Cek keseruan kami di Instagram
        </p>
        <div className="instagram grid w-full  grid-cols-2 gap-4 mt-[3rem]">
          <Image src={ig1} width={250} height={250} layout="fixed" />
          <Image src={ig2} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
          <Image src={ig3} width={250} height={250} layout="fixed" />
        </div>
      </div>
      
    </div>
  );
}

export default FollowBatugin;
