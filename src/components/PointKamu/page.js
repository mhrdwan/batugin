"use client";
import { useEffect, useState } from "react";
import TablePoint from "./table";
import FooterComp from "../Home/Footer";
import { Button, Modal, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ArticleZustand } from "@/zustand/Article/article";
export default function PointKamu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { tambahPoint } = ArticleZustand();
  const [datasemua, setdatasemua] = useState({
    email: null,
    nama: null,
    photo: null,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    await tambahPoint(datasemua);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="mt-5 md:pr-[8.5rem] md:pl-[8.5rem] pr-[0.71rem] pl-[0.71rem]">
        <Login />
        <p className="text-center text-secondary-2 text-[0.85rem] mt-[3rem] font-medium font-poopin">
          Ladder Board Points
        </p>
        <div className="mt-[3rem]">
          <div className="flex justify-end">
            <Button
              style={{ backgroundColor: "#d1232a", color: "white" }}
              onClick={showModal}
            >
              Input Point
            </Button>
          </div>
          <TableBaru />
        </div>
      </div>
      <div className="mt-[10rem]">
        <FooterComp />
      </div>

      <Modal
        title="Input Point"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item
            label="Nama"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              onChange={(e) => {
                setdatasemua(() => {
                  return {
                    ...datasemua,
                    nama: e.target.value,
                  };
                });
              }}
              placeholder="Masukkan Nama"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              onChange={(e) => {
                setdatasemua(() => {
                  return {
                    ...datasemua,
                    email: e.target.value,
                  };
                });
              }}
              placeholder="Masukkan Email"
            />
          </Form.Item>
          <Form.Item
            label="Photo"
            name="photo"
            rules={[{ required: true, message: "Please upload your photo!" }]}
          >
            <Upload
              name="photo"
              listType="picture"
              maxCount={1}
              onChange={(e) => {
                setdatasemua(() => {
                  return {
                    ...datasemua,
                    foto: e.file,
                  };
                });
              }}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

function Login() {
  return (
    <></>
    // <div className="table-login pr-[0.71rem] pl-[0.71rem] mt-5 flex justify-center ">
    //   <div className="pt-5 pb-5 w-full border rounded-lg border-black text-center h-[9rem]">
    //     <div className="text-secondary-2">
    //       <p className="text-[1rem] font-medium">
    //         Please log in/register to view points
    //       </p>
    //       <div className="flex justify-center mt-4">
    //         <button className="mx-2 px-5 py-2 border border-red-600 text-red-600 font-medium rounded-sm">
    //           Register
    //         </button>
    //         <button className="mx-2 px-5 py-2 bg-red-600 text-white font-medium rounded-sm">
    //           Login
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

function TableBaru() {
  const { getPointAllData, getPointAll } = ArticleZustand();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    getPointAll();
    setTotalPages(Math.ceil(getPointAllData.totalData / itemsPerPage));
  }, {});
  
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(getPointAllData)
  return (
    <>
      <style>
        {`
        .styled-table {
            font-family: Arial, sans-serif;
            background-color: white;
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            border: 1px solid black;
        }
        .styled-table thead tr {
            background-color: #FDDB1D;
            color: black;
            text-align: left;
            border-bottom: 1px solid black;
        }
        .styled-table th,
        .styled-table td {
            padding: 12px 15px;
        }
        .styled-table tbody tr {
            border-bottom: 1px solid #dddddd;
        }
        .styled-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
        }
        .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
        }
        .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #009879;
        }
        `}
      </style>
      <table className="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {getPointAllData?.data?.map((item, index) => (
            <tr>
              <td>{item.no}</td>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td className="text-red-600">{item.point}</td>
            </tr>
          ))}
          {/* more rows as needed */}
        </tbody>
      </table>
      <div className="Frame51 t h-10 justify-end w-full items-start gap-2 inline-flex">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`Frame${index + 46} hover:cursor-pointer w-10 p-2 ${index + 1 === currentPage ? 'bg-yellow-900' : 'hover:bg-primary-2'} rounded border border-yellow-900 flex-col justify-center items-center gap-2 inline-flex`}
          >
            <div className={`text-base font-medium font-['Poppins'] ${index + 1 === currentPage ? 'text-white' : 'text-yellow-900'}`}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
