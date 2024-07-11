import React from "react";
import ig1 from "../../../public/assets/ig1.png";
import ig2 from "../../../public/assets/ig2.png";
import ig3 from "../../../public/assets/ig3.png";
import ig4 from "../../../public/assets/ig4.png";
import ig5 from "../../../public/assets/ig5.png";
import ig6 from "../../../public/assets/ig6.png";
import ig7 from "../../../public/assets/ig7.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function FollowBatugin() {
  const routerr = usePathname();
  console.log(`ini router`, routerr);
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto mt-[10rem] mb-[10rem] hidden md:block pl-10 pr-10">
        {routerr !== "/points" && (
          <>
            <p className="font-semibold underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 text-[1.5rem]">
              Yuk, Follow Batugin!
            </p>
            <p className="font-normal mt-3 text-[1rem] text-neutral-3">
              Cek keseruan kami di Instagram
            </p>
          </>
        )}
        <div className="instagram grid grid-cols-4 gap-4 mt-[3rem]">
          {[ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig4].map((src, index) => (
            <a
              key={index}
              href="https://www.instagram.com/batuginkf/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper"
            >
              <Image src={src} width={250} height={250} layout="fixed" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-[10rem] md:hidden pl-10 pr-10 mb-[10rem]">
        <p className="font-semibold underline decoration-[3px] text-secondary-2 underline-offset-[6px] decoration-red-500 text-[1.5rem]">
          Yuk, Follow Batugin!
        </p>
        <p className="font-normal mt-3 text-[1rem] text-neutral-3">
          Cek keseruan kami di Instagram
        </p>
        <div className="instagram grid w-full grid-cols-2 gap-4 mt-[3rem]">
          {[ig1, ig2, ig3, ig3].map((src, index) => (
            <a
              key={index}
              href="https://www.instagram.com/batuginkf/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper"
            >
              <Image src={src} width={250} height={250} layout="fixed" />
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .image-wrapper {
          display: block;
          overflow: hidden;
          position: relative;
        }
        .image-wrapper:hover img {
          transform: scale(1.1);
        }
        img {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default FollowBatugin;
