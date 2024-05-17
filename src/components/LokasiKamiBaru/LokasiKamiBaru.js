import React, { useEffect, useState } from "react";
import FooterComp from "../Home/Footer";
import { Select } from "antd";
import { LokasiZustand } from "@/zustand/location/lokasi";

function LokasiKamiBaru() {
  const { getLokasi, DataLokasi } = LokasiZustand();
  useEffect(() => {
    getLokasi();
  }, []);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");

  const handleProvinsiChange = (e) => {
    setSelectedProvinsi(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-start mt-14">
        <div className="text-2xl font-semibold text-yellow-900">
          Lokasi Kami
        </div>
        <div className="shrink-0 mt-1 max-w-full h-1 bg-red-600 w-[262px]" />
        <div className="mt-2 text-base text-zinc-600">
          Kamu mau ke offline store kami?
        </div>
        <div className="self-stretch p-10 mt-10 w-full bg-white rounded-xl border border-yellow-900 border-solid max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-2 justify-between self-stretch px-6 py-3 w-full text-xl font-medium text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div>Provinsi</div>
                <Select placeholder="Cari Provinsi" style={{ width: "100%" }}>
                  <Select.Option>Cari Provinsi</Select.Option>
                  {Array.isArray(DataLokasi)?.provinsi?.map(
                    (provinsi, index) => (
                      <Select.Option key={index} value={provinsi}>
                        {provinsi?.provinsi}
                      </Select.Option>
                    )
                  )}
                </Select>
                <div>Kota</div>
                <Select
                  disabled={!DataLokasi.kota}
                  placeholder="Cari Kota"
                  style={{ width: "100%" }}
                >
                  {Array.isArray(DataLokasi).kota?.map((provinsi, index) => (
                    <Select.Option key={index} value={provinsi}>
                      {provinsi}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[10%] max-md:ml-0 max-md:w-full">
              <div className="bg-accents-2 mt-2 text-white font-semibold text-base leading-normal px-5 py-2 rounded hover:bg-accents-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Cari
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch mt-10 w-full text-base font-medium rounded-xl border-2 border-yellow-900 border-solid max-md:max-w-full">
        <div className="flex gap-5 justify-center px-7 py-6 w-full text-black bg-yellow-400 rounded-xl border-2 border-yellow-900 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div>No.</div>
          <div>Nama Mitra</div>
          <div>Lokasi</div>
          <div>Alamat Mitra</div>
          <div>Maps</div>
        </div>
        <div className="flex gap-4 justify-center items-center py-6 pl-8 max-md:flex-wrap max-md:pl-5">
          <div className="self-stretch my-auto text-yellow-900">01</div>
          <div className="flex-1 self-stretch my-auto text-center text-yellow-900">
            Kima Farma
          </div>
          <div className="flex-1 self-stretch my-auto text-center text-yellow-900">
            Cibubur
          </div>
          <div className="flex gap-2 self-stretch max-md:flex-wrap">
            <div className="flex-1 text-yellow-900 max-md:max-w-full">
              RW.14, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah
              Khusus Ibukota Jakarta 13440
            </div>
            <div className="flex-1 my-auto text-center text-red-600">
              Lihat Maps
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center py-6 pl-8 max-md:flex-wrap max-md:pl-5">
          <div className="self-stretch my-auto text-yellow-900">02</div>
          <div className="flex-1 self-stretch my-auto text-center text-yellow-900">
            Apotek 24
          </div>
          <div className="flex-1 self-stretch my-auto text-center text-yellow-900">
            Cipayung
          </div>
          <div className="flex gap-2 self-stretch max-md:flex-wrap">
            <div className="flex-1 text-yellow-900 max-md:max-w-full">
              RW.14, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah
              Khusus Ibukota Jakarta 13440
            </div>
            <div className="flex-1 my-auto text-center text-red-600">
              Lihat Maps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LokasiKamiBaru;
