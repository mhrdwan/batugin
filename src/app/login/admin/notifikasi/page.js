"use client";
import React, { useEffect } from "react";
import Sidebar from "../page";
import { usePathname } from "next/navigation";
import { Button, Col, Row, Table } from "antd";
import { ArticleZustand } from "@/zustand/Article/article";

export default function NotifikasiPage() {
  const { getPointAdmin, getPointAdminData, approvePoint } = ArticleZustand();
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
      title: "Edit",
      render: (ew) => {
        return (
          <>
            <Button
              size="sm"
              style={{ backgroundColor: "#1677ff", color: "white" }}
              onClick={(e) => {
                console.log(ew);
                approvePoint(ew.id)
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
  console.log(getPointAdminData.data);
  useEffect(() => {
    getPointAdmin();
  }, []);
  return (
    <Sidebar title={partAfterAdmin}>
      <div className="w-full ">
        <Col>
          <h1>Waiting Approve Point Admin</h1>
          <Table dataSource={getPointAdminData.data} columns={columns} />
        </Col>
        {/* <Col md={12}>
            <h1>Waiting Approve Point Admin</h1>
            <Table
              // dataSource={DataBanner?.data}
              columns={columns}
            />
          </Col> */}
      </div>
    </Sidebar>
  );
}
