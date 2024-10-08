"use client";
import { LoginZustand } from "@/zustand/loginStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AdminLogin() {
  const {
    setUsername,
    setPassword,
    loginApi,
    userPassword,
    loading,
    responseMessage,
  } = LoginZustand();

  const router = useRouter();
  async function ValidasiLogin() {
    const resposne = await loginApi();
    console.log(resposne);
    if (resposne == 200) {
      return router.push("/login/admin/dashboard");
    } else {
      return;
    }
  }
  useEffect(() => {
    if (responseMessage == 200) {
      console.log("ini 200");
      return router.push("/dashboard");
    } else {
      console.log("ini bukan 200");
      return;
    }
  }, [userPassword]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Admin</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            disabled={loading}
            onClick={() => ValidasiLogin()}
            className={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } w-full   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <p className="text-red-500">
            {responseMessage != 200 ? responseMessage : ""}
          </p>
        </form>
      </div>
    </div>
  );
}
