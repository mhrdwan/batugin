import React, { useEffect, useState } from "react";
import { Modal, Button, Input, Row, Upload } from "antd";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { ArticleZustand } from "@/zustand/Article/article";

export default function ModalArtikelBaru({
  openModal,
  setOpenModal,
  data,
  setidModal,
  idModal,
}) {
  const [content, setContent] = useState(data?.content || "");
  const [contentUpload, setContentUpload] = useState({
    title: data?.title || "",
    subTitle: data?.sub_title || "",
    image: data?.foto || null,
  });
  const { uploadArtikel, editArtikel, getArticle ,editFotoArtikel} = ArticleZustand();

  useEffect(() => {
    if (idModal === "edit" && data) {
      setContentUpload({
        title: data.title,
        subTitle: data.sub_title,
        image: data?.foto,
      });
      setContent(data.content);
    } else if (idModal === "create") {
      setContentUpload({
        title: "",
        subTitle: "",
        image: null,
      });
      setContent("");
    }
  }, [idModal, data]);

  const handleTyping = (e) => {
    const { name, value } = e.target;
    setContentUpload({
      ...contentUpload,
      [name]: value,
    });
  };

  const handleSave = async (valid) => {
    if (valid == "create") {
      uploadArtikel({ ...contentUpload, content });
      await getArticle();
      setOpenModal(false);
    } else {
      // console.log(`contentUpload`,contentUpload)
      editArtikel({ ...contentUpload, content },data.id);
      await editFotoArtikel(data.id,{...contentUpload, content})
      await getArticle();
      setOpenModal(false);
    }
  };
// console.log(data)
  const handleUploadChange = (info) => {
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
      title={idModal === "create" ? "Artikel Baru" : "Edit Artikel"}
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={null}
      width={1400}
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
              onClick={() =>
                handleSave(idModal == "create" ? "create" : "edit")
              }
            >
              Simpan
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}
