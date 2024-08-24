import { baseURL } from "@/app/api/baseUrl";
import { notification } from "antd";
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
  deleteGA: async (id) => {
    try {
      const data = await axios.post(`${baseURL}article/delete-giveaway`, {
        id: id,
      });
      console.log(data.data);
      notification.success({
        message: data?.data?.status?.message || "Berhasil di hapus",
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: error?.response?.data?.status?.message || "Gagal dihapus",
      });
      return error;
    }
  },
  createGA: async (data) => {
    const fetchGetListGA = get().fetchGetListGA
    const form = new FormData();
    form.append("cover", data?.cover);
    form.append("title", data?.title);
    form.append("content", data?.content);
    form.append("link", data?.link);
    try {
      const response = await axios.post(
        `${baseURL}article/add-giveaway`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      notification.success({
        message: response?.data?.status?.message || "Berhasil ditambahkan",
      });
      await fetchGetListGA();
    } catch (error) {
      console.error(error);
      notification.error({
        message: error?.response?.data?.status?.message || "Gagal dihapus",
      });
      return error;
    }
  },
  editGA: async (data) => {
    const fetchGetListGA = get().fetchGetListGA
    const form = new FormData();
    form.append("id_giveaway", data?.id);
    form.append("title", data?.title);
    form.append("content", data?.content);
    form.append("link", data?.link);
    try {
      const response = await axios.post(
        `${baseURL}article/edit-giveaway`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      notification.success({
        message: response?.data?.status?.message || "Berhasil ditambahkan",
      });
      await fetchGetListGA();
    } catch (error) {
      console.error(error);
      notification.error({
        message: error?.response?.data?.status?.message || "Gagal dihapus",
      });
      return error;
    }
  },
  editFotoGA: async (data) => {
    const fetchGetListGA = get().fetchGetListGA
    const form = new FormData();
    form.append("id", data?.id);
    form.append("cover", data?.cover);
    try {
      const response = await axios.post(
        `${baseURL}article/edit-giveaway-photo`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      notification.success({
        message: response?.data?.status?.message || "Berhasil ditambahkan",
      });
      await fetchGetListGA();
    } catch (error) {
      console.error(error);
      notification.error({
        message: error?.response?.data?.status?.message || "Gagal dihapus",
      });
      return error;
    }
  },
}));
