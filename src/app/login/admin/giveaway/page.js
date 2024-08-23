import React from "react";
import Sidebar from "../page";
import { Table } from "antd";

function GiveAwayAdminPage() {
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
    ]
  return (
    <div>
      <Sidebar title="Giveaway ">
        <div className="">
          <Table />
        </div>
      </Sidebar>
    </div>
  );
}

export default GiveAwayAdminPage;
