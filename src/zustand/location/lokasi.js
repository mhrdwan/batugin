import axios from "axios";

const { create } = require("zustand");

export const LokasiZustand = create((set, get) => ({
  DataLokasi: [],
  loading: true,
  id_provinsi: "",
  setid_provinsi: (item) => set({ id_provinsi: item }),
  id_kota: "",
  setid_kota: (item) => set({ id_kota: item }),
  getLokasi: async () => {
    const id_provinsi = get().id_provinsi;
    const id_kota = get().id_kota;
    try {
      const response = await axios.get(
        `http://159.223.85.15:2000/location/get-select-location?id_provinsi=${id_provinsi}&id_kota=${id_kota}`
      );
      // console.log(response.data);
      set({ DataLokasi: response.data });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
  dataSemuaLokasiSelect:[],
  getLokasiPosisi: async () => {
    const id_provinsi = get().id_provinsi;
    const id_kota = get().id_kota;
    try {
      const response = await axios.get(
        `http://159.223.85.15:2000/location/get-location?id_provinsi=${id_provinsi}&id_kota=${id_kota}&page=1&limit=10`
      );
      // console.log(response.data.data);
      set({dataSemuaLokasiSelect : response.data})
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
