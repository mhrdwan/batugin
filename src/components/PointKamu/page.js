import React from "react";
import TablePoint from "./table";
import FooterComp from "../Home/Footer";

export default function PointKamu() {
  return (
    <>
      <div className="mt-5 md:pr-[8.5rem] md:pl-[8.5rem] pr-[0.71rem] pl-[0.71rem]">
        <p className="text-center text-[1.1rem] md:text-start font-poopin underline-offset-[6px] underline decoration-[3px] decoration-red-500">
          Point Kamu
        </p>
        <>
          <Login />
        </>
        <div className="table-login pr-[0.71rem] pl-[0.71rem] mt-5 flex justify-center ">
          <div className="pt-5 pb-5 w-full border rounded-lg border-black text-center h-[9rem] pr-[0.71rem] pl-[0.71rem] grid grid-cols-3">
            <div className="   text-secondary-2  grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Jumlah Pembelian</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">24</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">Kali</p>
            </div>
            <div className=" font-medium text-secondary-2 text-[0.71rem] grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Bukti Transaksi</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">18</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">
                Upload Bukti
              </p>
            </div>
            <div className=" font-medium text-secondary-2 text-[0.71rem] grid grid-rows-3">
              <p className="text-[0.71rem]  font-medium">Total Point</p>
              <p className="text-accents-2 font-medium text-[1.71rem]">360</p>
              <p className="text-accents-2 font-medium  text-[0.71rem]">
                Points
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-secondary-2 text-[0.85rem] mt-[3rem] font-medium font-poopin">
          Ladder Board Points
        </p>
        <div className="mt-[3rem]">
          <TablePoint />
        </div>
      </div>
      <div className="mt-[10rem]">
        <FooterComp />
      </div>
    </>
  );
}

function Login() {
  return (
    <div className="table-login pr-[0.71rem] pl-[0.71rem] mt-5 flex justify-center ">
      <div className="pt-5 pb-5 w-full border rounded-lg border-black text-center h-[9rem]">
        <div className="   text-secondary-2 ">
          <p className="text-[1rem]  font-medium ">
            Silahkan masuk/daftar untuk melihat point
          </p>
          <div className="grid grid-cols-2">
            <button>Daftar</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
