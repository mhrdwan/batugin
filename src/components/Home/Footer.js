import React from "react";
import footer from "../../../public/assets/footer.png";
import logo from "../../../public/assets/LOGO BATUGIN-01.png";
import Image from "next/image";

function FooterComp() {
  return (
    <div>
      <div className="mt-[20rem] md:flex justify-center items-center   hidden">
        <div
          className="h-[19rem] w-full bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url('${footer.src}')` }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-5 gap-4 w-full justify-items-center">
              <div className="flex justify-center">
                <Image src={logo} />
              </div>
              <div className="flex flex-col text-start">
                <div className="font-semibold text-accents-2 text-[1.25rem]">
                  Tentang
                </div>
                <div className="text-[1rem] text-accents-2 ">
                  <div>About</div>
                  <div>Help Center</div>
                  <div>Store</div>
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="font-semibold text-accents-2 text-[1.25rem]">
                  Social Media
                </div>
                <div className="text-[1rem] text-accents-2 ">
                  <div>Instagram</div>
                  <div>Facebook</div>
                  <div>Twitter</div>
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="font-semibold text-accents-2 text-[1.25rem]">
                  Social Media
                </div>
                <div className="text-[1rem] text-accents-2 ">
                  <div>Instagram</div>
                  <div>Facebook</div>
                  <div>Twitter</div>
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="font-semibold text-accents-2 text-[1.25rem]">
                  Social Media
                </div>
                <div className="text-[1rem] text-accents-2 ">
                  <div>Instagram</div>
                  <div>Facebook</div>
                  <div>Twitter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full  flex mt-[20rem] h-[50rem]  md:hidden"
        style={{
          backgroundImage: "url('/assets/ft-bawah-hp.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" w-full mt-[3.7rem] pr-[1.4rem] pl-[1.4rem]">
          <Image src={logo} />
          <div className="flex flex-col text-start">
            <div className="font-semibold text-accents-2 text-[1.45rem]">
              Tentang
            </div>
            <div className="text-[0.85rem] text-accents-2 ">
              <div>About</div>
              <div>Help Center</div>
              <div>Store</div>
            </div>
            <div className="font-semibold mt-[3.7rem]  text-accents-2 text-[1.45rem]">
            Social Media
            </div>
            <div className="text-[0.85rem] text-accents-2 ">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Twitter</div>
            </div>
            <div className="font-semibold mt-[3.7rem]  text-accents-2 text-[1.45rem]">
            Others
            </div>
            <div className="text-[0.85rem] text-accents-2 ">
              <div>Store</div>
              <div>Points</div>
              <div>Laddeboard</div>
            </div>
            <div className="font-semibold mt-[3.7rem]  text-accents-2 text-[1.45rem]">
            Contact
            </div>
            <div className="text-[0.85rem] text-accents-2 ">
              <div>batugin.support@gmail.com</div>
              <div>(021) 1238-2309</div>
              <div>(Whatsapp) 0812-2389-1239 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
