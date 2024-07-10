import { baseURL } from "@/app/api/baseUrl";
import axios from "axios";

const { create } = require("zustand");


export const LoginZustand = create((set, get) => ({
  userPassword: {
    username: "",
    password: "",
  },
  loading: false,
  responseMessage: "",
  setUsername: (username) =>
    set((state) => ({
      userPassword: { ...state.userPassword, username },
    })),
  setPassword: (password) =>
    set((state) => ({
      userPassword: { ...state.userPassword, password },
    })),
  loginApi: async (user, password) => {
    const userPassword = get().userPassword;
    console.log(userPassword);
    set({ loading: true });
    try {
      const response = await axios.post(
        `${baseURL}auth/login-admin`,
        {
          username: userPassword.username,
          password: userPassword.password,
        }
      );
      set({ loading: false });
      console.log(response.data.status);
      set({
        responseMessage: response.data.status.code,
      });
      return response.data.status.code
    } catch (error) {
      console.log(error.response.data.status.message);
      set({
        loading: false,
        responseMessage: error.response.data.status.message,
      });
      return error.response.data.status.message
    }
  },
}));
