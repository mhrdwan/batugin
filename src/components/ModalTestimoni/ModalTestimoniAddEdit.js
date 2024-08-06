import { testimoniZustand } from "@/zustand/testimoni/testimoni";
import { Form, Input, Modal, Row, Col, Upload, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";

export default function ModalTestimoniAddEdit({
  openModal,
  dataModalEdit,
  setopenModal,
  titleModal,
}) {
  const { addTestimoni } = testimoniZustand();
  const [dataInput, setdataInput] = useState({
    nama: "",
    age: "",
    star: "",
    job: "",
    description: "",
    gambar: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setdataInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (titleModal === "Buat Testimoni") {
      setdataInput({
        nama: "",
        age: "",
        star: "",
        job: "",
        description: "",
        gambar: "",
      });
      console.log(`ini buat testimoni`);
    } else if (titleModal === "Edit Testimoni" && dataModalEdit) {
      setdataInput({
        nama: dataModalEdit?.name,
        age: dataModalEdit?.age,
        star: dataModalEdit?.star,
        job: dataModalEdit?.pekerjaan,
        description: dataModalEdit?.testimoni,
        gambar: "",
      });
    }
    console.log(titleModal);
  }, [dataModalEdit, titleModal]);

  return (
    <div>
      <Modal
        title={titleModal}
        onCancel={() => setopenModal(false)}
        open={openModal}
        width={500}
        onOk={() => addTestimoni(dataInput)}
      >
        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item label="Nama" style={{ marginBottom: "16px" }}>
                <Input
                  name="nama"
                  value={dataInput.nama}
                  onChange={handleInput}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Upload Gambar" style={{ marginBottom: "16px" }}>
                <Upload
                  onChange={(e) =>
                    setdataInput((prevData) => ({
                      ...prevData,
                      gambar: e.file,
                    }))
                  }
                >
                  <Button
                    name="Upload Gambar"
                    value={dataInput.gambar}
                    onChange={handleInput}
                  >
                    Upload Gambar
                  </Button>
                </Upload>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Age" style={{ marginBottom: "16px" }}>
                <Input
                  type="number"
                  name="age"
                  value={dataInput.age}
                  onChange={handleInput}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Star" style={{ marginBottom: "16px" }}>
                <Input
                  type="number"
                  name="star"
                  value={dataInput.star}
                  onChange={handleInput}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Job" style={{ marginBottom: "16px" }}>
                <Input
                  name="job"
                  value={dataInput.job}
                  onChange={handleInput}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Description" style={{ marginBottom: "16px" }}>
            <TextArea
              name="description"
              value={dataInput.description}
              onChange={handleInput}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
