import { baseURL } from "@/app/api/baseUrl";
import { message, notification } from "antd";
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

  // Upload Artikel
  uploadArtikel: async (form) => {
    const formData = new FormData();
    formData.append("cover", form.image);
    formData.append("title", form.title);
    formData.append("sub_title", form.subTitle);
    formData.append("content", form.content);
    console.log(`form`, form);
    try {
      const response = await axios.post(
        `${baseURL}article/add-article`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          maxBodyLength: Infinity,
        }
      );
      set({ detailDataArticle: response.data });
      console.log(response?.data?.status?.message);
      message.success(response?.data?.status?.message);
    } catch (error) {
      message.error(
        error?.response?.data?.status?.message || "gagal upload artikel"
      );
      set({ loading: false });
    }
  },
  // delete artikel
  deleteArtikel: async (id) => {
    const body = {
      id_article: id,
    };
    try {
      const response = await axios.post(
        `${baseURL}article/delete-article`,
        body
      );
      set({ detailDataArticle: response.data });
      console.log(`ini delete artikel`, response.data.status.message);
      message.success(response.data.status.message);
    } catch (error) {
      set({ loading: false });
    }
  },
}));
