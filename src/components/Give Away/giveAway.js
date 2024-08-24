import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import { Modal, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function GiveAway() {
  const { fetchGetListGA, dataFetchGetListGA } = giveAwayZustandStore();

  useEffect(() => {
    fetchGetListGA(1, 4);
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleLinkClick = (item) => {
    setModalContent({
      imageSrc: item.foto,
      title: item.title,
      description: item.content,
      link: item.link,
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-5">
      {/* <p className="font-semibold mb-2">Give Away</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {dataFetchGetListGA?.data?.map((item) => (
          <a
            type="link"
            onClick={() => handleLinkClick(item)}
            className="flex bg-white rounded-lg overflow-hidden mb-5 hover:cursor-pointer"
          >
            <div className="w-1/6 aspect-w-1 aspect-h-1 relative overflow-hidden group">
              <Image
                src={item.foto}
                alt={item.title}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                layout="fill"
              />
            </div>
            <div className="w-5/6 p-4 flex flex-col justify-between">
              <p className="text-md font-semibold">
                {truncateText(item.title, 20)}
              </p>
              <div className="text-sm text-gray-600">
                {truncateText(item.content, 50)}
              </div>
            </div>
          </a>
        ))}
        <AntdModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          content={modalContent}
        />
      </div>
    </div>
  );
}

const AntdModal = ({ isModalOpen, handleCancel, content }) => (
  <Modal
    open={isModalOpen}
    onCancel={handleCancel}
    footer={null}
    width="90%" // Mengatur lebar modal menjadi 90% dari layar untuk perangkat kecil
    bodyStyle={{ height: "500px", maxHeight: "90vh", overflowY: "auto" }} 
  >
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/2 p-2 h-full">
        <img
          src={content.imageSrc}
          alt={content.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-2 h-full flex flex-col">
        <p className="font-bold mb-2">
          {content.title}{" "}
          <a target="_blank" href={content?.link}>
            <Button style={{ color: "black", backgroundColor: "#fddb1d" }}>
              Menuju Halaman
            </Button>
          </a>
        </p>
        <p className="text-sm text-gray-600 overflow-auto">
          {content.description}
        </p>
      </div>
    </div>
  </Modal>
);
