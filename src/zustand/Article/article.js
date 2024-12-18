import { baseURL } from "@/app/api/baseUrl";
import { message, notification } from "antd";
import axios from "axios";

const { create } = require("zustand");

export const ArticleZustand = create((set, get) => ({
  DataArticle: [],
  detailDataArticle: "",
  loading: true,
  getPointAdminData: "",
  getPointAllData: "",
  getArticle: async () => {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article?page=1&limit=10`,
        {
          headers: {
            Authorization: localStorage.getItem("tokenlogin"),
          },
        }
      );
      set({ loading: false });
      set({ DataArticle: response.data });
    } catch (error) {
      set({ loading: false });
    }
  },
  getDetailArticle: async (id) => {
    try {
      const response = await axios.get(
        `${baseURL}article/get-article-detail?id_article=${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("tokenlogin"),
          },
        }
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
            Authorization: localStorage.getItem("tokenlogin"),
          },
          maxBodyLength: Infinity,
        }
      );
      set({ loading: false });
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
  editArtikel: async (form, id) => {
    const formData = new FormData();
    // formData.append("cover", form.image);
    formData.append("title", form.title);
    formData.append("sub_title", form.subTitle);
    formData.append("content", form.content);
    formData.append("id_article", id);
    // console.log(`form`, form);
    try {
      const response = await axios.post(
        `${baseURL}article/edit-article`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("tokenlogin"),
          },
          maxBodyLength: Infinity,
        }
      );
      set({ loading: false });
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
        body,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("tokenlogin"),
          },
        }
      );
      set({ detailDataArticle: response.data });
      set({ loading: false });
      console.log(`ini delete artikel`, response.data.status.message);
      message.success(response.data.status.message);
    } catch (error) {
      set({ loading: false });
    }
  },
  ///edit foto
  editFotoArtikel: async (id, form) => {
    const formData = new FormData();
    // console.log(`api`,id,form)
    formData.append("cover", form.image);
    formData.append("id_article", id);

    try {
      const response = await axios.post(
        `${baseURL}article/edit-article-photo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("tokenlogin"),
          },
          maxBodyLength: Infinity,
        }
      );
      set({ loading: false });
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
  tambahPoint: async (form) => {
    const formData = new FormData();
    // console.log(`api`,id,form)
    formData.append("cover", form.foto);
    formData.append("nama", form.nama);
    formData.append("email", form.email);
    console.log(`ini form api`, form);
    try {
      const response = await axios.post(`${baseURL}auth/add-point`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("tokenlogin"),
        },
        maxBodyLength: Infinity,
      });
      set({ loading: false });
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
  getPointAdmin: async (id) => {
    try {
      const response = await axios.get(`${baseURL}auth/get-point-admin`);
      set({ getPointAdminData: response.data });
    } catch (error) {
      set({ loading: false });
    }
  },
  approvePoint: async (id) => {
    try {
      const response = await axios.post(`${baseURL}auth/approve-point`, {
        id_point: id,
      });
      message.success(response?.data?.status?.message);
    } catch (error) {
      message.error(
        error?.response?.data?.status?.message || "gagal approve point"
      );
      set({ loading: false });
    }
  },

  getPointAll: async (id) => {
    try {
      const response = await axios.get(
        `${baseURL}auth/get-point-all?page=1&limit=10`
      );
      set({ getPointAllData: response.data });
    } catch (error) {
      set({ loading: false });
    }
  },
}));
