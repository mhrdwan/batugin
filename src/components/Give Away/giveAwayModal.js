import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import { Form, Modal, Input, Image, Upload, Button } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function GiveAwayModal({
  setOpenModal,
  openModal,
  title,
  data,
}) {
  const { createGA, editGA, editFotoGA } = giveAwayZustandStore();
  const [formValues, setFormValues] = useState({
    id: data?.id || "",
    title: data?.title || "",
    content: data?.content || "",
    link: data?.link || "",
    foto: data?.foto || null,
    cover: null,
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        id: data.id || "",
        title: data.title || "",
        content: data.content || "",
        link: data.link || "",
        foto: data?.foto || null,
      });
    }
  }, [data]);

  function onchange(e) {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }

  function handleUploadChange(info) {
    console.log(info?.file);
    if (info.file?.status === "done") {
      const localImageUrl = URL.createObjectURL(info.file.originFileObj);
      setFormValues((prevValues) => ({
        ...prevValues,
        foto: localImageUrl,
        cover: info.file.originFileObj,
      }));
    }
  }

  async function TombolOK(titles) {
    try {
      if (titles === "Create Giveaway") {
        console.log(`create`);
        await createGA(formValues);
      } else {
        console.log(`bukan create`);
        await editGA(formValues);
        if (formValues.cover != undefined) {
          await editFotoGA(formValues);
        }
      }
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Modal
        title={title}
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
          setFormValues({
            id: null,
            title: data?.title || "",
            content: null,
            link: null,
            foto: null,
            cover: null,
          });
        }}
        onOk={() => TombolOK(title)}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            <Input id="title" value={formValues.title} onChange={onchange} />
          </Form.Item>
          <Form.Item label="Content">
            <Input.TextArea
              id="content"
              value={formValues.content}
              onChange={onchange}
              rows={8}
            />
          </Form.Item>
          <Form.Item label="Upload Image">
            <Upload
              listType="picture-card"
              //  beforeUpload={() => false} 
              showUploadList={false}
              onChange={handleUploadChange}
            >
              {formValues.foto ? (
                <Image
                  src={formValues.foto}
                  alt="avatar"
                  style={{ width: "90%" }}
                />
              ) : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Link">
            <Input id="link" value={formValues.link} onChange={onchange} />
          </Form.Item>
        </Form>
      </Modal>
      <style>
        {`
        button, [type='button'], [type='reset'], [type='submit'] {
            -webkit-appearance: button;
            background-color: transparent;
            background-image: none;
            margin-left: 12px;
        }
        .ant-modal-footer > .ant-btn + .ant-btn {
            margin-inline-start: 8px;
            background-color: #1677ff;
        }
        `}
      </style>
    </div>
  );
}
