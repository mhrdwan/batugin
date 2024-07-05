import React, { useState } from "react";
import { Modal, Button, Input, Row } from "antd";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function ModalArtikelBaru({ openModal, setOpenModal }) {
  const [content, setContent] = useState("");
console.log(content)
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSave = () => {
    // Logika untuk menyimpan artikel
    console.log("Artikel disimpan:", content);
    setOpenModal(false);
  };

  return (
    <Modal
      title="Artikel Baru"
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
      width={800}
      bodyStyle={{ height: 600, display: "flex", flexDirection: "column" }}
    >
      {typeof window !== "undefined" && (
        <>
          <Row className=" flex space-y-3">
            <Input placeholder="Masukkan Title" />
            <Input placeholder="Masukkan Sub Title " />
          </Row>
          <ReactQuill
            theme="snow"
            className="mt-3"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            style={{ height: "400px", marginBottom: "50px" }}
          />
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={() => setOpenModal(false)}
              style={{ marginRight: 10 }}
            >
              Batal
            </Button>
            <Button
              style={{ backgroundColor: "#fddb1d", color: "black" }}
              onClick={handleSave}
            >
              Simpan
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}
