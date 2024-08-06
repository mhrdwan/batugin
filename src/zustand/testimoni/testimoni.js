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
  addTestimoni: async (data) => {
    const formData = new FormData();
    formData.append("cover", data?.cover);
    formData.append("name", data?.name);
    formData.append("testimoni", data?.testimoni);
    formData.append("age", data?.age);
    formData.append("star", data?.star);
    formData.append("job", data?.job);
    try {
      const data = await axios.post(`${baseURL}testimoni/add-testimoni`);
    } catch (error) {}
  },
}));
