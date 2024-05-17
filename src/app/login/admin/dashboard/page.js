"use client";
import React, { useEffect } from "react";
import Sidebar from "../page";
import { usePathname } from "next/navigation";
import TableBanner from "@/components/Table/TableBanner/TableBanner";
import TableArticle from "@/components/Table/TableArticle/TableArticle";
import { ArticleZustand } from "@/zustand/Article/article";

export default function Dashboard() {
 
  const routerr = usePathname();
  const pathSegments = routerr.split("/");
  const adminIndex = pathSegments.indexOf("admin");
  const partAfterAdmin =
    adminIndex !== -1 && adminIndex + 1 < pathSegments.length
      ? pathSegments.slice(adminIndex + 1).join("/")
      : "";
  console.log(partAfterAdmin);
  return (
    <Sidebar title={partAfterAdmin}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full ">
        <div className="bg-white h-[13vh] w-full rounded-lg shadow-md p-4 font-bold">
          <p>Total Banner</p>
        </div>
        <div className="bg-white h-[13vh] w-full rounded-lg shadow-md p-4 font-bold">
          Total Article
        </div>
        <div className="bg-white h-[13vh] w-full rounded-lg shadow-md p-4 font-bold">
          Total Testimoni
        </div>
      </div>
      <div className="flex space-x-6 w-full p-4 ">
        <div className="bg-white  w-full  rounded-lg shadow-md p-4 flex-1">
          <p className="border-b font-bold">Banner</p>
          <TableBanner />
        </div>
        <div className="bg-white  w-full rounded-lg shadow-md p-4 flex-1">
          <p className="border-b font-bold">Article</p>
          <TableArticle />
        </div>
      </div>
    </Sidebar>
  );
}
