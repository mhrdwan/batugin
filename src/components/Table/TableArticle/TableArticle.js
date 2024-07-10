import ModalArtikelBaru from "@/components/ModalArtikelBaru/ModalArtikelBaru";
import { ArticleZustand } from "@/zustand/Article/article";
import { Button, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";

export default function TableArticle() {
  const { getArticle, DataArticle, loading } = ArticleZustand();
  const [visiblePopConfirm, setVisiblePopConfirm] = useState(null);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    getArticle();
  }, []);

  const handleDelete = (key) => {
    // Add your delete logic here
    console.log(`Deleted item with key: ${key}`);
    setVisiblePopConfirm(null);
  };

  const handleCancel = () => {
    setVisiblePopConfirm(null);
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
      title: "Sub Title",
      dataIndex: "sub_title",
      key: "sub_title",
    },
    {
      title: "Foto",
      dataIndex: "foto",
      key: "foto",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => {
        return (
          <>
            <ModalArtikelBaru
              openModal={openModal === record.key}
              setOpenModal={() => setOpenModal(null)}
            />
            <Button
              size="sm"
              onClick={() => setOpenModal(record.key)}
              style={{ backgroundColor: "#1677ff", color: "white" }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Hapus Artikel"
              description="Yakin menghapus artikel?"
              visible={visiblePopConfirm === record.key}
              onConfirm={() => handleDelete(record.key)}
              onCancel={handleCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button
                danger
                onClick={() => setVisiblePopConfirm(record.key)}
                size="sm"
                style={{ backgroundColor: "red", color: "white" }}
              >
                Hapus
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Table
        loading={loading}
        scroll={{
          y: 240,
        }}
        dataSource={DataArticle?.data.map((item, index) => ({
          ...item,
          key: index,
        }))}
        columns={columns}
      />
    </div>
  );
}
