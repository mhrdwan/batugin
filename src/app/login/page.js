import NavbarComp from "@/components/NavbarComp";
import Image from "next/image";
import React from "react";
import gambAr from "../../../public/assets/loginKiri.png";

function page() {
  return (
    <div>
      <NavbarComp />
      <div className="bg-white grid grid-cols-2 h-screen">
        <div className="relative w-full  ">
          <Image src={gambAr} layout="fill" objectFit="cover" />
        </div>
        <div className="w-full pl-[126px]  mt-[205px] ">
          <div className="login text-[36px] text-accents-2">Login</div>
          <div className="login mt-[40px] text-[20px] text-accents-2">
            Email
          </div>
          <input
            placeholder=" Tuliskan email anda"
            className="Frame113 w-96 h-12 p-3 rounded-sm border border-yellow-900 justify-start items-center gap-2 inline-flex"
          />
          <div className="login mt-[17px] text-[20px] text-accents-2">
            Password Akun
          </div>
          <div className="w-96">
            <input
            type="password"
              placeholder="Masukkan Password"
              className="Frame113 w-96 h-12 p-3 rounded-sm border border-yellow-900 justify-start items-center gap-2 inline-flex"
            />
            <div className="LupaPassword  text-end  text-yellow-900 text-sm font-medium font-['Poppins']">
              Lupa password?
            </div>
          </div>
          <div className="hover:cursor-pointer ButtonSmall mt-[78px] w-96 h-12 px-5 py-2 bg-red-600 rounded-sm justify-center items-center gap-2 inline-flex">
            <div className="Login text-white text-base font-medium font-['Poppins']">
              Login
            </div>
          </div>
          <div className="flex mt-[40px] w-96 justify-center">
            <div className="BelumPunyaAkun opacity-50 text-yellow-900 text-base font-medium font-['Poppins']">
              Belum punya akun?
            </div>
            <div className="Daftar text-red-600 text-base font-medium font-['Poppins']">
              Daftar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
