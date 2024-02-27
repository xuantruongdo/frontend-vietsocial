import "./Setting.scss";
import SidebarChat from "../../components/SidebarChat/SidebarChat";
import { Button, Form, Input, message, notification } from "antd";
import { EditOutlined } from "@ant-design/icons";
import useModal from "../../hooks/useModal";
import { useEffect, useState } from "react";
import { callFetchUserById, callUpdateUser } from "../../api/api";
import { useParams } from "react-router-dom";

type FieldType = {
  fullname?: string;
  note?: string;
  live?: string;
  from?: string;
  relationship?: string;
};

const Setting = () => {
  const { slug } = useParams();
  const [infoUser, setInfoUser] = useState<IUser>();
  const [form] = Form.useForm();

  const fetchUserById = async () => {
    const res = await callFetchUserById(slug!);
    if (res && res.data) {
      setInfoUser(res.data);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

  useEffect(() => {
    const init = {
      _id: infoUser?._id,
      fullname: infoUser?.fullname,
      note: infoUser?.note,
      live: infoUser?.live,
      from: infoUser?.from,
      relationship: infoUser?.relationship,
    };

    form.setFieldsValue(init);
  }, [infoUser, form]);

  const onFinish = async (values: FieldType) => {
    const { fullname, note, live, from, relationship } = values;
    if (!infoUser?._id) return;
    const data = { fullname, note, live, from, relationship };

    const res = await callUpdateUser(infoUser?._id, data);

    if (res && res.data) {
      fetchUserById();
      handleCancel();
      message.success("User information updated successfully");
    } else {
      notification.error({
        message: "An error occurred",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };
  const { modal, showModal, handleCancel } = useModal({
    title: "Update your information",
    content: (
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ remember: true }}
        form={form}
      >
        <Form.Item<FieldType> name="fullname">
          <Input placeholder="Fullname" />
        </Form.Item>

        <Form.Item<FieldType> name="note">
          <Input placeholder="Note" />
        </Form.Item>
        <Form.Item<FieldType> name="live">
          <Input placeholder="Live" />
        </Form.Item>
        <Form.Item<FieldType> name="from">
          <Input placeholder="From" />
        </Form.Item>
        <Form.Item<FieldType> name="relationship">
          <Input placeholder="Relationship" />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    ),
  });
  return (
    <div className="setting">
      <SidebarChat />
      <div className="setting__content">
        <div className="setting__list">
          <div className="heading">
            <h2>YOUR INFORMATION</h2>
            <Button type="primary" onClick={showModal}>
              <EditOutlined />
            </Button>
          </div>
          <div className="setting__item">
            <p>Fullname:</p>
            <strong>{infoUser?.fullname}</strong>
          </div>
          <div className="setting__item">
            <p>Email:</p>
            <strong>{infoUser?.email}</strong>
          </div>
          <div className="setting__item">
            <p>Note:</p>
            <strong>{infoUser?.note}</strong>
          </div>

          <div className="setting__item">
            <p>Live:</p>
            <strong>{infoUser?.live}</strong>
          </div>

          <div className="setting__item">
            <p>From:</p>
            <strong>{infoUser?.from}</strong>
          </div>

          <div className="setting__item">
            <p>Relationship:</p>
            <strong>{infoUser?.relationship}</strong>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
};

export default Setting;
