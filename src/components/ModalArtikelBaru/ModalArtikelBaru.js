import React, { useState } from "react";
import { Modal, Button, Input, Row, Upload, message } from "antd";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { ArticleZustand } from "@/zustand/Article/article";

export default function ModalArtikelBaru({ openModal, setOpenModal }) {
  const [content, setContent] = useState("");
  const [contentUpload, setContentUpload] = useState({
    title: "",
    subTitle: "",
    image: null, 
  });
  const { uploadArtikel } = ArticleZustand();

  const handleTyping = (e) => {
    const { name, value } = e.target;
    setContentUpload({
      ...contentUpload,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Artikel disimpan:", { ...contentUpload, content });
    setOpenModal(false);
    uploadArtikel({ ...contentUpload, content });
  };

  const handleUploadChange = (info) => {
    console.log(`info`, info.file.originFileObj);
      setContentUpload({
        ...contentUpload,
        image: info.file.originFileObj,
      });
   
  };

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

  return (
    <Modal
      title="Artikel Baru"
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
      width={900}
      style={{ height: 700, display: "flex", flexDirection: "column" }}
    >
      {typeof window !== "undefined" && (
        <>
          <Row className="flex flex-col space-y-3">
            <Input
              name="title"
              value={contentUpload.title}
              onChange={handleTyping}
              placeholder="Masukkan Title"
            />
            <Input
              name="subTitle"
              value={contentUpload.subTitle}
              onChange={handleTyping}
              placeholder="Masukkan Sub Title"
            />
            <Upload onChange={handleUploadChange}>
              <Button>Masukkan Foto</Button>
            </Upload>
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
