import { baseURL } from "@/app/api/baseUrl";
import { notification } from "antd";
import axios from "axios";
import { create } from "zustand";

export const adminZustandStore = create((set, get) => ({
  dataFetchGetListAdmin: "",
  fetchGetListAdmin: async (page = 1, limit = 10) => {
    try {
      const data = await axios(
        `${baseURL}auth/get-auth-admin?page=${page}&limit=${limit}`
      );
      console.log(data.data);
      set({ dataFetchGetListAdmin: data?.data?.order });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  deleteListAdmin: async (id) => {
    try {
      const data = await axios.post(`${baseURL}auth/delete-admin-detail`, {
        id: id,
      });
      console.log(data.data);
      // set({ dataFetchGetListAdmin: data?.data?.order });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  createAdmin: async (formValues) => {
    try {
      const data = await axios.post(`${baseURL}auth/register-admin`, {
        username: formValues?.username,
        password: formValues?.password,
        email: formValues?.email,
      });
      console.log(data.data);
      // set({ dataFetchGetListAdmin: data?.data?.order });
      notification.success({
        message: "Berhasil",
        description: "Admin berhasil ditambahkan",
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  updatePasswordAdmin: async (id) => {
    try {
      const data = await axios.post(`${baseURL}auth/delete-admin-detail`, {
        id: id,
      });
      console.log(data.data);
      // set({ dataFetchGetListAdmin: data?.data?.order });
    } catch (error) {
      console.error(error);
      return error;
    }
  },
}));
