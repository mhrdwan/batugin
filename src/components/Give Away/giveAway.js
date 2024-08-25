import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import { Modal, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function GiveAway() {
  const { fetchGetListGA, dataFetchGetListGA } = giveAwayZustandStore();
  const [valueLoadMore, setvalueLoadMore] = useState(4);

  useEffect(() => {
    fetchGetListGA(1, valueLoadMore);
  }, [valueLoadMore]);

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

  const loadMore = async () => {
    try {
      let value = valueLoadMore + 4;
      setvalueLoadMore(value);
      console.log(value);
      await fetchGetListGA(1, valueLoadMore);
    } catch (error) {}
  };
  return (
    <div className="p-5">
      <p className="underline decoration-[3px] mb-5 text-secondary-2 underline-offset-[6px] decoration-red-500 md:text-[1.5rem] text-[1rem]">
        Give Away
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {dataFetchGetListGA?.data?.map((item) => (
          <a
            onClick={() => handleLinkClick(item)}
            className="flex bg-white rounded-lg overflow-hidden mb-2 shadow-md transform transition-transform hover:scale-105 hover:shadow-xl card"
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
              <p className="text-md font-semibold text-gray-800 group-hover:text-red-500 transition-colors">
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
      {dataFetchGetListGA && (
        <div className="w-full ">
          <button
            className="mt-5 px-4 w-full py-2 bg-[#fddb1d] text-black rounded hover:bg-[#FCE770] transition"
            onClick={() => {
              loadMore();
            }}
          >
            Tampilkan lebih banyak
          </button>
        </div>
      )}
    </div>
  );
}

const AntdModal = ({ isModalOpen, handleCancel, content }) => (
  <Modal
    open={isModalOpen}
    onCancel={handleCancel}
    footer={null}
    width="80%"
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
