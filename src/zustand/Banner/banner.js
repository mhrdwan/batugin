import axios from "axios";

const { create } = require("zustand");

export const BannerZustand = create((set, get) => ({
  DataBanner: [],
  loading: true,
  getBanner: async () => {
    try {
      const response = await axios.get(
        `http://159.223.85.15:2000/banner/get-banner-home`
      );
      console.log(response.data);
      set({ DataBanner: response.data });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
