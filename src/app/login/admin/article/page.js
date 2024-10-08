"use client";
import { ArticleZustand } from "@/zustand/Article/article";
import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import Sidebar from "../page";
import ModalArtikelBaru from "@/components/ModalArtikelBaru/ModalArtikelBaru";
import TableArticle from "@/components/Table/TableArticle/TableArticle";

function Article() {
  const { getArticle, DataArticle, loading } = ArticleZustand();
  useEffect(() => {
    getArticle();
  }, []);
  const [openModal, setOpenModal] = useState(false);
  const [idModal, setidModal] = useState("create");
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "name",
      width: 70,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "age",
    },
    {
      title: "Sub Title",
      dataIndex: "sub_title",
      key: "address",
    },
    {
      title: "Foto",
      dataIndex: "foto",
      key: "address",
    },
    // {
    //   title: "Edit",
    //   render: () => {
    //     return (
    //       <>
    //         <Button
    //           size="sm"
    //           style={{ backgroundColor: "#1677ff", color: "white" }}
    //         >
    //           Edit
    //         </Button>
    //         <Button
    //           size="sm"
    //           style={{ backgroundColor: "red", color: "white" }}
    //         >
    //           Hapus
    //         </Button>
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div>
      <Sidebar title="Article">
        <Button
          onClick={() => {
            setidModal("create");
            setOpenModal(true);
          }}
          style={{ backgroundColor: "#fddb1d", color: "black" }}
        >
          Artikel Baru
        </Button>
        <div className="mt-3">
          <TableArticle
            idModal={idModal}
            setidModal={setidModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
        {/* <Table
          loading={loading}
          scroll={{
            y: 500,
          }}
          dataSource={DataArticle?.data}
          columns={columns}
        /> */}
        {/* <ModalArtikelBaru openModal={openModal} setOpenModal={setOpenModal}/> */}
      </Sidebar>
    </div>
  );
}

export default Article;
