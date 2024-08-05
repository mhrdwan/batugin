"use client";
import React, { useEffect } from "react";
import Sidebar from "../page";
import { usePathname } from "next/navigation";
import { Button, Space, Table, Tag } from "antd";
import { BannerZustand } from "@/zustand/Banner/banner";
export default function Banner() {
  const routerr = usePathname();
  const pathSegments = routerr.split("/");
  const adminIndex = pathSegments.indexOf("admin");
  const { getBanner, loading, DataBanner } = BannerZustand();
  useEffect(() => {
    getBanner();
  }, []);
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: 70,
    },
    {
      title: "Banner",
      dataIndex: "banner",
      key: "banner",
      render: (banner) => {
        return (
          <img
            style={{ width: 100, height: "10vh" }}
            src={banner}
            alt="banner"
          />
        );
      },
    },
    {
      title: "Edit",
      render: () => {
        return (
          <>
            <Button
              size="sm"
              style={{ backgroundColor: "#1677ff", color: "white" }}
            >
              Edit
            </Button>
            <Button
              size="sm"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Hapus
            </Button>
          </>
        );
      },
    },
  ];
  const partAfterAdmin =
    adminIndex !== -1 && adminIndex + 1 < pathSegments.length
      ? pathSegments.slice(adminIndex + 1).join("/")
      : "";
  return (
    <div>
      <Sidebar title={partAfterAdmin}>
        <Table columns={columns} dataSource={DataBanner?.data} />
      </Sidebar>
    </div>
  );
}
