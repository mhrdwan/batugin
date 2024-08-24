import { giveAwayZustandStore } from "@/zustand/GiveAway/giveAway";
import {
  Form,
  Modal,
  Input,
  Image,
  Upload,
  Button,
  Row,
  Col,
  Switch,
} from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { adminZustandStore } from "@/zustand/Admin/admin";

export default function AdminModal({ setOpenModal, openModal, title, data }) {
  const {
    createAdmin,
    fetchGetListAdmin,
    updatePasswordAdmin,
    updateDetailAdmin,
  } = adminZustandStore();
  const [swich, setswich] = useState(false);
  const [formValues, setFormValues] = useState({
    username: data?.username || "",
    email: data?.email || "",
    password: data?.password || null,
    id: data?.id || "",
  });

  useEffect(() => {
    if (data) {
      setFormValues({
        username: data?.username || "",
        email: data?.email || "",
        password: data?.password || null,
        id: data?.id || "",
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

  async function TombolOK(titles) {
    try {
      if (titles === "Create Admin") {
        await createAdmin(formValues);
        await fetchGetListAdmin();
        await setOpenModal(false);
      } else {
        await updateDetailAdmin(formValues);
        if (formValues.password != null) {
            await updatePasswordAdmin(formValues);
        }
        await fetchGetListAdmin()
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
        width={600}
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
          setFormValues({
            username: null,
            password: null,
            email: null,
          });
          setswich(false);
        }}
        onOk={() => TombolOK(title)}
      >
        <Form layout="vertical" className="mt-5">
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Username">
                <Input
                  id="username"
                  value={formValues.username}
                  onChange={onchange}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Email">
                <Input
                  id="email"
                  type="email"
                  value={formValues.email}
                  onChange={onchange}
                />
              </Form.Item>
            </Col>
            {title == "Create Admin" ? (
              <>
                <Col span={8}>
                  <Form.Item label={"Password"}>
                    <Input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={onchange}
                    />
                  </Form.Item>
                </Col>{" "}
              </>
            ) : (
              <Col span={8}>
                <Form.Item label={swich ? "Password" : "Change Password?"}>
                  {swich && title != "Create Admin" ? (
                    <Input
                      type="password"
                      id="password"
                      value={formValues.password}
                      onChange={onchange}
                    />
                  ) : (
                    <Switch checked={swich} onChange={(e) => setswich(e)} />
                  )}
                </Form.Item>
              </Col>
            )}
          </Row>
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
            :where(.css-dev-only-do-not-override-j9bb5n).ant-switch .ant-switch-inner {
    display: block;
    overflow: hidden;
    border-radius: 100px;
    background: gray;
    height: 100%;
    padding-inline-start: 24px;
    padding-inline-end: 9px;
    transition: padding-inline-start 0.2s ease-in-out, padding-inline-end 0.2s ease-in-out;
}
        `}
      </style>
    </div>
  );
}
