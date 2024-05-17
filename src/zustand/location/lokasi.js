import axios from "axios";

const { create } = require("zustand");

export const LokasiZustand = create((set, get) => ({
  DataLokasi: [],
  loading: true,
  getLokasi: async () => {
    try {
      const response = await axios.get(
        `http://159.223.85.15:2000/location/get-select-location?id_provinsi=&id_kota=`
      );
      console.log(response.data);
      set({ DataLokasi: response.data });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
