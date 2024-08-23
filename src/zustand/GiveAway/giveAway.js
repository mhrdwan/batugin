import { baseURL } from "@/app/api/baseUrl";
import axios from "axios";
import { create } from "zustand";

export const giveAwayZustandStore = create((set, get) => ({
  dataFetchGetListGA: "",
  fetchGetListGA: async (page = 1, limit = 10) => {
    try {
      const data = await axios(
        `${baseURL}article/get-giveaway?page=${page}&limit=${limit}`
      );
      console.log(data.data);
      set({ dataFetchGetListGA: data?.data });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  fetchDetailGA: async (id) => {
    try {
      const data = await axios(
        `${baseURL}article/get-giveaway-detail?id=${id}`
      );
      console.log(data.data);
      set({ dataFetchGetListGA: data?.data });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
}));
