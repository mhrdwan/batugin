"use client";
import React, { useEffect } from "react";
import Sidebar from "../page";
import { Button, Table } from "antd";
import Image from "next/image";
import { testimoniZustand } from "@/zustand/testimoni/testimoni";
import "./testimoni.css";
export default function Testimoni() {
  const { fetchDataTestimoni, dataTestimoni } = testimoniZustand();
  useEffect(() => {
    fetchDataTestimoni();
  }, []);
  const columnsList = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Pekerjaan",
      dataIndex: "pekerjaan",
      key: "pekerjaan",
    },
    {
      title: "Testimoni",
      dataIndex: "testimoni",
      key: "testimoni",
    },
    {
      title: "star / age",
      dataIndex: "testimoni",
      key: "testimoni",
      render: (testimoni, data) => {
        return (
          <>
            {data.star} - {data?.age}
          </>
        );
      },
    },
    {
      title: "foto",
      dataIndex: "foto",
      key: "foto",
      render: (foto) => {
        return <Image alt={foto} width={100} height={100} src={foto} />;
      },
    },
    {
      title: "Edit / Detele",
      // dataIndex: "foto",
      // key: "foto",
      render: () => {
        return (
          <>
            <Button style={{ backgroundColor: "yellow", color: "black" }}>
              Edit
            </Button>{" "}
            <Button style={{ backgroundColor: "red", color: "white" }}>Detele</Button>
          </>
        );
      },
    },
  ];
  console.log(dataTestimoni?.data);
  return (
    <div>
      <Sidebar title="Testimoni">
        <Table columns={columnsList} dataSource={dataTestimoni?.data} />
      </Sidebar>
    </div>
  );
}
