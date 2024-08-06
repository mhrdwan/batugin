import { baseURL } from "@/app/api/baseUrl";
import axios from "axios";
import { create } from "zustand";

export const katamerekaZustandStore = create((set, get) => ({
  dataFetchGetList: "",
  //   setid_provinsi: (item) => set({ id_provinsi: item }),
  fetchGetList: async () => {
    try {
      const data = await axios(
        `${baseURL}testimoni/get-testimoni?limit=999&page=1`
      );
      console.log(data.data);
      set({ dataFetchGetList: data?.data });
    } catch (error) {}
  },
}));
