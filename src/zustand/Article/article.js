import axios from "axios";

const { create } = require("zustand");

export const ArticleZustand = create((set, get) => ({
  DataArticle: [],
  loading: true,
  getArticle: async () => {
    try {
      const response = await axios.get(
        `https://batuginbackend.whandev.tech/article/get-article?page=1&limit=10`
      );
      set({ DataArticle: response.data });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
