"use client";
import Link from "next/link";

export default function MenuNavbar() {
  return (
    <div className="fixed top-0 right-0" style={{ zIndex: 999 }}>
      <div className="w-36  p-5 bg-neutral-50 rounded-bl-2xl shadow flex flex-col justify-start items-end gap-2.5">
        <div className="w-9 h-9 p-2 flex flex-col justify-center items-center gap-2" />
        <div className="self-stretch p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/"}>Home</Link>
          </div>
        </div>
        <div className="self-stretch p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/obat-peluruh-batu-ginjal-pertama-di-indonesia"}>
              Product
            </Link>
          </div>
        </div>
        <div className="w-24 p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/points"}>Activity</Link>
          </div>
        </div>
        <div className="w-24 p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/katamereka"}>Testimoni</Link>
          </div>
        </div>
        <div className="w-24 p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/artikel"}>Artikel</Link>
          </div>
        </div>
        <div className="w-24 p-2.5 flex justify-center items-center gap-2">
          <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
            <Link href={"/mitra-kami"}>Mitra</Link>
          </div>
        </div>
        <Link href={"/login"}>
          <button
            className="bg-accents-2 text-white font-semibold text-base leading-normal px-5 py-2 rounded hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            style={{ width: "100px", height: "38px" }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
