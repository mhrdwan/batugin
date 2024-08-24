"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../page";
import { usePathname } from "next/navigation";
import { adminZustandStore } from "@/zustand/Admin/admin";
import { Button, Modal, Table } from "antd";
import AdminModal from "@/components/Admin/adminModal";

export default function page() {
  const [openModal, setOpenModal] = useState(false);
  const [title, settitle] = useState("Create Admin");
  const [data, setdata] = useState(null);
  const { fetchGetListAdmin, dataFetchGetListAdmin, deleteListAdmin } =
    adminZustandStore();
  const routerr = usePathname();
  const pathSegments = routerr.split("/");
  const adminIndex = pathSegments.indexOf("admin");
  const partAfterAdmin =
    adminIndex !== -1 && adminIndex + 1 < pathSegments.length
      ? pathSegments.slice(adminIndex + 1).join("/")
      : "";

  useEffect(() => {
    fetchGetListAdmin();
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "name",
      width: 70,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      render: (text, record) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpenModal(true);
                settitle(`Edit ${record?.username}`);
                setdata(record)
                console.log(record);
              }}
              style={{ backgroundColor: "#fddb1d", color: "black" }}
            >
              Edit
            </Button>
            <Button
              style={{ backgroundColor: "red", color: "black" }}
              onClick={() => showDeleteConfirm(record)}
            >
              Hapus
            </Button>
          </>
        );
      },
    },
  ];
  const showDeleteConfirm = (record) => {
    Modal.confirm({
      title: "Yakin untuk hapus ini?",
      // content: ` ${record.title}`,
      okText: "Ya",
      okType: "danger",
      cancelText: "Tidak",
      async onOk() {
        try {
          console.log("Deleting:", record);
          await deleteListAdmin(record.id);
          await fetchGetListAdmin();
        } catch (error) {
          console.error("Error deleting:", error);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <Sidebar title="Control Admin">
        <Button
          onClick={(e) => {
            settitle("Create Admin");
            setOpenModal(true);
          }}
          style={{
            color: "black",
            backgroundColor: "#fddb1d",
            marginBottom: 10,
          }}
        >
          Create Admin
        </Button>
        <Table columns={columns} dataSource={dataFetchGetListAdmin} />
      </Sidebar>
      <AdminModal
        openModal={openModal}
        title={title}
        setOpenModal={setOpenModal}
        data={data}
      />
      {/* <style>
        {`
       button, [type='button'], [type='reset'], [type='submit'] {
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none;
            margin-left: 12px;
        }
      `}
      </style> */}
    </>
  );
}
