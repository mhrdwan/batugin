"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../page";
import { Button, Table } from "antd";
import Image from "next/image";
import { testimoniZustand } from "@/zustand/testimoni/testimoni";
import "./testimoni.css";
import ModalTestimoniAddEdit from "@/components/ModalTestimoni/ModalTestimoniAddEdit";
export default function Testimoni() {
  const { fetchDataTestimoni, dataTestimoni } = testimoniZustand();
  const [openModal, setopenModal] = useState(false);
  const [dataModalEdit , setdataModalEdit] = useState([]);
  const [titleModal, settitleModal] = useState("Buat Testimoni");
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
      title: "Edit / Delete",
      // dataIndex: "foto",
      // key: "foto",
      render: (data) => {
        return (
          <>
            <Button
              onClick={() => {
                settitleModal("Edit Testimoni");
                setopenModal(true)
                // console.log(data)
                setdataModalEdit(data)
              }}
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Edit
            </Button>{" "}
            <Button style={{ backgroundColor: "red", color: "white" }}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];
  console.log(dataTestimoni?.data);
  return (
    <div>
      <Sidebar title="Testimoni">
        <Button
          style={{
            backgroundColor: "yellow",
            color: "black",
            borderColor: "black",
          }}
          onClick={() => {
            settitleModal("Buat Testimoni");
            setopenModal(true)}}
        >
          Tambah Testimoni
        </Button>
        <Table pagination={false} columns={columnsList} dataSource={dataTestimoni?.data} />
        <ModalTestimoniAddEdit
        dataModalEdit={dataModalEdit}
          titleModal={titleModal}
          setopenModal={setopenModal}
          openModal={openModal}
        />
      </Sidebar>
    </div>
  );
}
