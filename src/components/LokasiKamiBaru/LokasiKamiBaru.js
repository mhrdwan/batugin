import React, { useEffect } from "react";
import { Select } from "antd";
import { LokasiZustand } from "@/zustand/location/lokasi";

function LokasiKamiBaru() {
  const {
    getLokasi,
    DataLokasi,
    setid_provinsi,
    setid_kota,
    id_provinsi,
    id_kota,
    getLokasiPosisi,
    dataSemuaLokasiSelect,
  } = LokasiZustand();

  useEffect(() => {
    getLokasi();
  }, [id_provinsi]);

  useEffect(() => {
    getLokasiPosisi();
  }, [id_kota]);

console.log(`dataSemuaLokasiSelect`,dataSemuaLokasiSelect)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-start mt-14">
        <div className="text-2xl font-semibold text-yellow-900">
          Lokasi Kami
        </div>
        <div className="shrink-0 mt-1 h-1 bg-red-600 w-64" />
        <div className="mt-2 text-base text-zinc-600">
          Kamu mau ke offline store kami?
        </div>
        <div className="self-stretch p-10 mt-10 bg-white rounded-xl border border-yellow-900 max-md:px-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-full">
              <div className="flex grow gap-2 justify-between px-6 py-3 text-xl font-medium text-black bg-white max-md:flex-wrap max-md:px-5 max-md:mt-10">
                <div className="sm:w-1/2 w-full sm:pr-2 p-0">
                  <div>Provinsi</div>
                  <Select
                    showSearch
                    optionFilterProp="children"
                    placeholder="Cari Provinsi"
                    style={{ width: "100%" }}
                    onChange={(e, w) => {
                      setid_provinsi(w.Option.id_provinsi);
                    }}
                  >
                    {Array.isArray(DataLokasi?.provinsi) &&
                      DataLokasi.provinsi.map((provinsi, index) => (
                        <Select.Option
                          Option={provinsi}
                          key={index}
                          value={provinsi.provinsi}
                        >
                          {provinsi.provinsi}
                        </Select.Option>
                      ))}
                  </Select>
                </div>
                <div className="sm:w-1/2 w-full sm:pr-2 p-0">
                  <div>Kota</div>
                  <Select
                    disabled={!id_provinsi}
                    showSearch
                    optionFilterProp="children"
                    placeholder={!id_provinsi ? "Pilih Provinsi Terlebih Dahulu" : "Cari Kota"}
                    style={{ width: "100%" }}
                    onChange={(e, w) => {
                      setid_kota(w.Option.id_kota);
                    }}
                  >
                    {Array.isArray(DataLokasi?.kota) &&
                      DataLokasi.kota.map((kota, index) => (
                        <Select.Option
                          key={index}
                          Option={kota}
                          value={kota.kota}
                        >
                          {kota.kota}
                        </Select.Option>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col w-auto">
              <div className="bg-yellow-500 mt-2 text-white font-semibold text-base leading-normal px-5 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Cari
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-10  rounded-lg">
        <table className="min-w-full divide-y border rounded-lg divide-gray-200">
          <thead className="bg-primary-2">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Nama Mitra
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Provinsi
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Kota
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Alamat Mitra
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Maps
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataSemuaLokasiSelect?.data?.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.no}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                   {item.nama_mitra}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                   {item.provinsi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                   {item.kota}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                   {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Maps
                    </a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LokasiKamiBaru;
