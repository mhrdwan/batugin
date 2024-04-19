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
          <TableBaru />
          {/* <TablePoint /> */}
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
        <div className="text-secondary-2">
          <p className="text-[1rem] font-medium">
            Silahkan masuk/daftar untuk melihat point
          </p>
          <div className="flex justify-center mt-4">
            <button className="mx-2 px-5 py-2 border border-red-600 text-red-600 font-medium rounded-sm">
              Daftar
            </button>
            <button className="mx-2 px-5 py-2 bg-red-600 text-white font-medium rounded-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableBaru() {
  return (
    <div className=" rounded-[10px] border-2 border-yellow-900 flex-col justify-start items-start inline-flex">
      <div className="self-stretch bg-yellow-400 rounded-tl-[10px] rounded-tr-[10px] border-2 border-yellow-900 justify-center items-center inline-flex">
        <div className="h-[66px] px-2 py-6 justify-center items-center flex">
          <div className="text-black text-xs font-medium font-['Poppins']">
            No.
          </div>
        </div>
        <div className="h-[66px] px-2 py-6 justify-center items-center flex">
          <div className="text-black text-xs font-medium font-['Poppins']">
            Nama
          </div>
        </div>
        <div className="h-[66px] px-2 py-6 justify-center items-center flex">
          <div className="text-black text-xs font-medium font-['Poppins']">
            Email
          </div>
        </div>
        <div className="h-[66px] py-6 justify-center items-center flex">
          <div className="text-black text-xs font-medium font-['Poppins']">
            Pts
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            01
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Nurahman
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Nurahman2@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,204
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            02
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Akbarudin A
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Akbarudin.a@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,178
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            03
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Steven T
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            S.Tjandra99@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,123
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            04
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Aqilah N
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Aqilah08n@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,111
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            05
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Rahmawati S
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Rahma.watis@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,095
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            06
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Michael J.S
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            MichJes@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,044
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            07
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Katrin K
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Katrin.Kaka6@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            1,008
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            08
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Syaifudin M
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Sya.Muh@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            992
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            09
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Yuliana H
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            YHartanto00@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            977
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center inline-flex">
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            10
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Tina A
          </div>
        </div>
        <div className="h-[63px] px-2 py-6 justify-center items-center flex">
          <div className="text-yellow-900 text-[10px] font-medium font-['Poppins']">
            Tina.tin04@gmail.com
          </div>
        </div>
        <div className="h-[63px] py-6 justify-center items-center flex">
          <div className="text-red-600 text-[10px] font-medium font-['Poppins']">
            923
          </div>
        </div>
      </div>
    </div>
  );
}
