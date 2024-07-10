import { baseURL } from "@/app/api/baseUrl";
import axios from "axios";

const { create } = require("zustand");

export const ArticleZustand = create((set, get) => ({
  DataArticle: [],
  detailDataArticle: "",
  loading: true,
  getArticle: async () => {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article?page=1&limit=10`
      );
      set({ DataArticle: response.data });
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
  getDetailArticle: async (id) => {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article-detail?id_article=${id}`
      );
      set({ detailDataArticle: response.data });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
