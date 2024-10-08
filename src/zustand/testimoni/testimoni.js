import { baseURL } from "@/app/api/baseUrl";
import { notification } from "antd";
import axios from "axios";
// const token = localStorage.getItem("tokenlogin");

const { create } = require("zustand");
export const testimoniZustand = create((set, get) => ({
  dataTestimoni: [],
  fetchDataTestimoni: async () => {
    try {
      const data = await axios.get(
        `${baseURL}testimoni/get-testimoni?limit=999&page=1`
      );
      //   console.log(data);
      set({ dataTestimoni: data?.data });
    } catch (error) {}
  },
  addTestimoni: async (data) => {
    const formData = new FormData();
    formData.append("cover", data?.gambar?.originFileObj);
    formData.append("name", data?.nama);
    formData.append("testimoni", data?.description);
    formData.append("age", data?.age);
    formData.append("star", data?.star);
    formData.append("job", data?.job);
    try {
      const data = await axios.post(
        `${baseURL}testimoni/add-testimoni`,
        formData,
        // {
        //   headers: {
        //     Authorization: token,
        //   },
        // }
      );
      console.log(data?.data?.status?.message);
      notification.success({
        message: data?.data?.status?.message || "Testimoni added successfully",
      });
    } catch (error) {
      console.log(error);
      notification.error({
        message:
          error.response?.data.status.message || "Error adding testimoni",
      });
    }
  },
  editTestimoni: async (data) => {
    const formData = new FormData();
    formData.append("cover", data?.gambar?.originFileObj);
    formData.append("name", data?.nama);
    formData.append("id_testimoni", data?.id_testimoni);
    formData.append("testimoni", data?.description);
    formData.append("age", data?.age);
    formData.append("star", data?.star);
    formData.append("job", data?.job);
    try {
      const data = await axios.post(
        `${baseURL}testimoni/edit-testimoni`,
        formData,
        // {
        //   headers: {
        //     Authorization: token,
        //   },
        // }
      );
    } catch (error) {
      console.log(error);
      notification.error({
        message: error.response.data.status.message || "Error adding testimoni",
      });
    }
  },
  deleteDataTestimoni: async (id) => {
    const body = {
      id_testimoni: id,
    };
    try {
      const data = await axios.post(`${baseURL}testimoni/del-testimoni`, body);
      //   console.log(data);
      notification.success({
        message: data?.data?.status?.message || "deleted successfully",
      });
    } catch (error) {}
  },
}));
