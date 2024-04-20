"use client"
import Link from "next/link";

export default function MenuNavbar() {
  return (
    <div className="fixed top-0 right-0" style={{ zIndex: 999 }}>
      <div className="w-36 h-52 p-5 bg-neutral-50 rounded-bl-2xl shadow flex flex-col justify-start items-end gap-2.5">
        <div className="w-9 h-9 p-2 flex flex-col justify-center items-center gap-2" />
        <div className="self-stretch p-2.5 flex justify-center items-center gap-2">
          <Link href={"/tentang-batugin"}>
            <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
              About
            </div>
          </Link>
        </div>
        <div className="self-stretch p-2.5 flex justify-center items-center gap-2">
          <Link href={"/"}>
            <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
              Product
            </div>
          </Link>
        </div>
        <div className="w-24 p-2.5 flex justify-center items-center gap-2">
          <Link href={"/points"}>
            <div className="text-stone-900 text-xs font-medium font-['Roboto'] tracking-tight">
              Points
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
