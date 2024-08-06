import { baseURL } from "@/app/api/baseUrl";
import axios from "axios";

const { create } = require("zustand");

export const testimoniZustand = create((set, get) => ({
  dataTestimoni: [],
  fetchDataTestimoni: async () => {
    try {
      const data = await axios.get(
        `${baseURL}testimoni/get-testimoni?limit=10&page=1`
      );
    //   console.log(data);
      set({ dataTestimoni: data?.data });
    } catch (error) {}
  },
}));
