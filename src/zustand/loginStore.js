import axios from "axios";

const { create } = require("zustand");

export const LoginZustand = create((set, get) => ({
  userPassword: {
    username: "",
    password: "",
  },
  loading: false,
  setUsername: (username) =>
    set((state) => ({
      userPassword: { ...state.userPassword, username },
    })),
  setPassword: (password) =>
    set((state) => ({
      userPassword: { ...state.userPassword, password },
    })),
  loginApi: async (user, password) => {
    set({ loading: true });
    try {
      const response = await axios.post(
        `http://159.223.85.15:2000/auth/login-admin`,
        {
          username: user,
          password: password,
        }
      );
      set({ loading: false });
      console.log(response);
    } catch (error) {}
  },
}));
