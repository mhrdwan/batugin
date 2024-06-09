"use client";
import { ArticleZustand } from "@/zustand/Article/article";
import { Button, Table } from "antd";
import React, { useEffect } from "react";
import Sidebar from "../page";

function Article() {
  const { getArticle, DataArticle, loading } = ArticleZustand();
  useEffect(() => {
    getArticle();
  }, []);
  
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

  return (
    <div>
      <Sidebar title="Article">
        <Table
          loading={loading}
          scroll={{
            y: 240,
          }}
          dataSource={DataArticle?.data}
          columns={columns}
        />
      </Sidebar>
    </div>
  );
}

export default Article;
