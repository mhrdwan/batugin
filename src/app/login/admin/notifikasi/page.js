"use client";
import React, { useEffect } from "react";
import Sidebar from "../page";
import { usePathname } from "next/navigation";
import { Button, Col, Row, Table } from "antd";
import { ArticleZustand } from "@/zustand/Article/article";

export default function NotifikasiPage() {
  const {
    getPointAdmin,
    getPointAdminData,
    approvePoint,
    getPointAllData,
    getPointAll,
  } = ArticleZustand();
  const routerr = usePathname();
  const pathSegments = routerr.split("/");
  const adminIndex = pathSegments.indexOf("admin");
  const partAfterAdmin =
    adminIndex !== -1 && adminIndex + 1 < pathSegments.length
      ? pathSegments.slice(adminIndex + 1).join("/")
      : "";

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "Gambar",
      dataIndex: "foto",
      key: "foto",
      render :(data)=>{
        return (
          <img
            alt={data}
            style={{ width: "100px" }}
            src={`${data}`}
          />
        );
      }
    },
    {
      title: "Edit",
      render: (ew) => {
        return (
          <>
            <Button
              size="sm"
              style={{ backgroundColor: "#1677ff", color: "white" }}
              onClick={async (e) => {
                console.log(ew);
                await approvePoint(ew.id);
                await getPointAdmin();
                await getPointAll();
              }}
            >
              Approve
            </Button>
            {/* <Button
              size="sm"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Hapus
            </Button> */}
          </>
        );
      },
    },
  ];
  const columnsList = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Point",
      dataIndex: "point",
      key: "point",
    },
  ];
  // console.log(getPointAdminData.data.length);
  useEffect(() => {
    getPointAdmin();
    getPointAll();
  }, []);
  return (
    <Sidebar
      title={partAfterAdmin}
      dataNotifikasi={getPointAdminData?.data?.length || 0}
    >
      <div className="w-full ">
        <h1 className="font-bold">Waiting Approve Point Admin</h1>
        <Table dataSource={getPointAdminData.data} columns={columns} />
        <h1 className="mt-10 font-bold">List Approve Point Admin</h1>
        <Table dataSource={getPointAllData.data} columns={columnsList} />
      </div>
    </Sidebar>
  );
}
