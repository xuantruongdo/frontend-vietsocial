import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Typography,
  message,
  notification,
} from "antd";
import { useEffect, useState } from "react";
import { SelectProps } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import {
  callDeleteGroupChat,
  callFetchAllUers,
  callUpdateGroupChat,
} from "../../api/api";
import { doSelectedChatAction } from "../../redux/chat/chatSlice";

type FieldType = {
  chatName?: string;
  users?: any[];
};

const ModalManageChat = ({
  chat,
  isOpenModalSetting,
  setIsOpenModalSetting,
  fetchChats,
}: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [users, setUsers] = useState<IUser[]>([]);
  const currentUser = useSelector((state: any) => state.account.user);
  const dispatch = useDispatch();
  const [ids, setIds] = useState<string[]>([]);

  const options: SelectProps["options"] = users
    .filter((user) => user?._id !== currentUser?._id)
    .map((user) => ({
      label: user?.fullname,
      value: user?._id,
    }));

  const fetchAllUsers = async () => {
    const res = await callFetchAllUers();
    if (res && res.data) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleChange = (arrIds: string[]) => {
    setIds(arrIds);
  };

  useEffect(() => {
    const init = {
      chatName: chat?.chatName,
      users: chat?.users
        ? chat.users.map((user: any) => ({
            label: user?.fullname,
            value: user?._id,
          }))
        : [],
    };

    form.setFieldsValue(init);
  }, [chat, form]);

  const handleSaveChat = async (values: any) => {
    const data = {
      chatName: values?.chatName,
      users: ids.length ? ids : chat?.users.map((user: any) => user?._id),
    };
    setLoading(true);
    const res = await callUpdateGroupChat(chat?._id, data);
    setLoading(false);
    if (res && res?.data) {
      message.success("Group chat updated successfully");
      setIsOpenModalSetting(false);
      fetchChats();
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

  const handleDeleteChat = async () => {
    setLoadingDelete(true);
    const res = await callDeleteGroupChat(chat?._id);
    setLoadingDelete(false);
    if (res && res?.data) {
      message.success("Group chat deleted successfully");
      setIsOpenModalSetting(false);
      fetchChats();
      dispatch(doSelectedChatAction(null));
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

  return (
    <Modal
      open={isOpenModalSetting}
      onCancel={() => setIsOpenModalSetting(false)}
      footer={[]}
    >
      <Typography
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "#333",
          paddingBottom: "20px",
        }}
      >
        Setting Chat
      </Typography>
      <Flex vertical gap={10}>
        <Form
          onFinish={handleSaveChat}
          autoComplete="off"
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item<FieldType> name="chatName">
            <Input placeholder="Chat name" />
          </Form.Item>

          <Form.Item<FieldType> name="users">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              onChange={handleChange}
              options={options}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
            Save
          </Button>
          <Button danger loading={loadingDelete} onClick={handleDeleteChat} style={{width: '100%', marginTop: 10}}>
            Delete
          </Button>
        </Form>
      </Flex>
    </Modal>
  );
};

export default ModalManageChat;
