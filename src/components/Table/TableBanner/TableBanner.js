import { BannerZustand } from "@/zustand/Banner/banner";
import { Button, Table } from "antd";
import React, { useEffect } from "react";

export default function TableBanner() {
  const { getBanner, loading,DataBanner } = BannerZustand();
  useEffect(() => {
    getBanner();
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Banner",
      dataIndex: "banner",
      key: "banner",
      render :(banner)=>{
        return <img src={banner} alt="banner" style={{width:"80%" , height:"10vh"}}/>;
      }
    },
    {
      title: "Edit",
      render: () => {
        return (
          <>
            <Button size="sm" style={{backgroundColor :"#1677ff" , color :"white"}}>Edit</Button>
            <Button size="sm" style={{backgroundColor :"red" , color :"white"}}>Hapus</Button>
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
        dataSource={DataBanner?.data}
        columns={columns}
      />
    </div>
  );
}
