"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuNavbar from "./menuNavbarMobile/page";
import logo from "../../public/assets/LOGO BATUGIN-01.png";

const menuIconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d1232a"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-align-justify"
  >
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

function NavbarComp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heightInPx = 3 * 16;
  const widthInPx = 6.25 * 16;

  return (
    <>
      <div className="bg-white text-black md:h-[5.5rem] px-32  items-center w-full hidden md:flex opacity-0 md:opacity-100 ">
        <div className="flex justify-between w-full">
          <div className="items-center">
            <Link href={"/"}>
              <Image
                height={heightInPx}
                width={widthInPx}
                src={logo}
                alt="Logo Batugin"
              />
            </Link>
          </div>
          <div className="flex justify-between space-x-5 items-center text-[1rem]">
            <Link href={"/tentang-batugin"}>
              <div className="hover:cursor-pointer">About</div>
            </Link>
            <Link href={"/obat-peluruh-batu-ginjal-pertama-di-indonesia"}>
              <div>Product</div>
            </Link>
            <Link href={"/points"}>
              <div>Points</div>
            </Link>
            <button
              className="bg-accents-2 text-white font-semibold text-base leading-normal px-5 py-2 rounded hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{ width: "100px", height: "48px" }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="layar-kecil bg-white md:hidden h-[3.5rem] flex items-center justify-between p-[1.25rem]">
        <Link href={"/"}>
          <Image
            height={heightInPx}
            width={widthInPx}
            src={logo}
            alt="Logo Batugin"
          />
        </Link>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? menuIconSvg : <MenuNavbar />}
        </div>
      </div>
    </>
  );
}

export default NavbarComp;
