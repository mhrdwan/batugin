import ModalArtikelBaru from "@/components/ModalArtikelBaru/ModalArtikelBaru";
import { ArticleZustand } from "@/zustand/Article/article";
import { Button, Popconfirm, Table } from "antd";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TableArticle({
  openModal,
  setOpenModal,
  idModal,
  setidModal,
}) {
  const { getArticle, DataArticle, loading, deleteArtikel } = ArticleZustand();
  const [visiblePopConfirm, setVisiblePopConfirm] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const route = usePathname();

  useEffect(() => {
    getArticle();
  }, []);

  const handleDelete = async (key) => {
    await deleteArtikel(key);
    setVisiblePopConfirm(null);
    await getArticle();
  };

  const handleCancel = () => {
    setVisiblePopConfirm(null);
  };

  const handleOpenModal = (record) => {
    setSelectedRecord(record);
    setOpenModal(true);
    setidModal(record ? "edit" : "create");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRecord(null);
    setidModal(null);
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
      title: "Link",
      dataIndex: "sub_title",
      key: "sub_title",
      render :(data1,datasemua)=>{
        // console.log(data1,datasemua)
        return <Button 
        onClick={()=> window.open(`https://www.batugin.co.id/artikel/${datasemua?.title}/${datasemua?.id}`)}
        style={{backgroundColor:'#fddb1d' ,color:'black'}}>Link</Button>
      }
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => {
        return (
          <>
            <Button
              size="sm"
              onClick={() => handleOpenModal(record)}
              style={{ backgroundColor: "#1677ff", color: "white" }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Hapus Artikel"
              description="Yakin menghapus artikel?"
              visible={visiblePopConfirm === record.key}
              onConfirm={() => handleDelete(record.id)}
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
        scroll={route === "/login/admin/article" ? {} : { y: 240 }}
        dataSource={DataArticle?.data?.map((item, index) => ({
          ...item,
          key: index,
        }))}
        columns={columns}
      />
      {openModal && (
        <ModalArtikelBaru
          idModal={idModal}
          setidModal={setidModal}
          data={selectedRecord}
          openModal={openModal}
          setOpenModal={handleCloseModal}
        />
      )}
    </div>
  );
}
