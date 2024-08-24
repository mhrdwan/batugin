"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../page";
import { Button, Table, Modal } from "antd";
import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import Image from "next/image";
import GiveAwayModal from "@/components/Give Away/giveAwayModal";

function GiveAwayAdminPage() {
  const { fetchGetListGA, dataFetchGetListGA, deleteGA } =
    giveAwayZustandStore();

  const [openModal, setOpenModal] = useState(false);
  const [title, settitle] = useState(false);
  const [dataPerID, setdataPerID] = useState(false);
  useEffect(() => {
    fetchGetListGA();
  }, []);

  const showDeleteConfirm = (record) => {
    Modal.confirm({
      title: "Yakin untuk hapus ini?",
      content: ` ${record.title}`,
      okText: "Ya",
      okType: "danger",
      cancelText: "Tidak",
      async onOk() {
        try {
          console.log("Deleting:", record);
          await deleteGA(record?.id);
          await fetchGetListGA();
          console.log("Deleted:", record);
        } catch (error) {
          console.error("Error deleting:", error);
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Foto",
      dataIndex: "foto",
      key: "foto",
      render: (foto) => {
        return (
          <Image
            src={foto}
            alt="banner"
            width={80}
            height={80}
            style={{ width: "20%" }}
          />
        );
      },
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
                settitle("Edit Giveaway");
                setdataPerID(record)
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

  return (
    <div>
      <Sidebar title="Giveaway ">
        <div className="">
          <Button
            onClick={(e) => {
              settitle("Create Giveaway");
              setOpenModal(true);
            }}
            style={{
              backgroundColor: "#fddb1d",
              fontWeight: "",
              color: "black",
            }}
          >
            Create Giveaway
          </Button>
          <Table columns={columns} dataSource={dataFetchGetListGA.data} />
        </div>
      </Sidebar>
      <GiveAwayModal
        title={title}
        setOpenModal={setOpenModal}
        openModal={openModal}
        data={dataPerID}
      />
    </div>
  );
}

export default GiveAwayAdminPage;
