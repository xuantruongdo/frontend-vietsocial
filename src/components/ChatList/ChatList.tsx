import {
  Avatar,
  Button,
  Flex,
  Input,
  Select,
  Space,
  message,
  notification,
} from "antd";
import "./ChatList.scss";
import { FaPlus, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { checkReceiver } from "../../helpers/checkReceiver";
import { BASE_URL } from "../../constants/constants";
import { doSelectedChatAction } from "../../redux/chat/chatSlice";
import useModal from "../../hooks/useModal";
import { SelectProps } from "antd/lib";
import { useEffect, useState } from "react";
import { callCreateGroupChat, callFetchAllUers } from "../../api/api";

interface IProps {
  chats: IChat[];
  fetchChats?: any;
}
const ChatList = (props: IProps) => {
  const { chats, fetchChats } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const selectedChat = useSelector((state: any) => state.chat.selectedChat);
  const [chatName, setChatName] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [ids, setIds] = useState<string[]>([]);
  const dispatch = useDispatch();
  const handleSelectedChat = (chat: IChat) => {
    dispatch(doSelectedChatAction(chat));
  };

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

  const handleCreateGroupChat = async () => {
    const data = {
      chatName,
      users: ids,
    };

    setLoading(true);
    const res = await callCreateGroupChat(data);
    setLoading(false);

    if (res && res.data) {
      setChatName("");
      message.success("Successfully created a chat group");
      handleCancel();
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

  const { modal, showModal, handleCancel } = useModal({
    title: "Create group chat",
    content: (
      <Flex vertical gap={10}>
        <Input
          placeholder="Chat name"
          value={chatName}
          onChange={(e) => setChatName(e.target.value)}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          onChange={handleChange}
          options={options}
        />
        <Button type="primary" loading={loading} onClick={handleCreateGroupChat}>
          Create
        </Button>
      </Flex>
    ),
  });

  return (
    <div className="chat__list">
      <Flex align="center" justify="space-between" className="heading">
        <h2>Chats</h2>
        <div className="icon" onClick={showModal}>
          <FaPlus fontSize={20} />
        </div>
      </Flex>

      <div className="list">
        {chats?.map((chat) => (
          <Flex
            align="center"
            justify="space-between"
            className="item"
            style={{
              backgroundColor:
                chat?._id === selectedChat?._id ? "#333" : "unset",
              color: chat?._id === selectedChat?._id ? "white" : "unset",
            }}
            key={chat?._id}
            onClick={() => handleSelectedChat(chat)}
          >
            <Space>
              {!chat?.isGroupChat ? (
                <Avatar
                  size={44}
                  src={`${BASE_URL}/images/${
                    checkReceiver(chat?.users, currentUser?._id)?.avatar
                  }`}
                  alt="avatar"
                />
              ) : (
                <Avatar size={44} icon={<FaUsers />} alt="avatar" />
              )}

              <div>
                <h4>
                  {chat?.isGroupChat ? chat?.chatName : checkReceiver(chat?.users, currentUser?._id)?.fullname}
                </h4>
                <Flex gap={5}>
                  <p>{chat?.latestMessage?.sender.fullname}: </p>
                  <p>{chat?.latestMessage?.content.slice(0, 10)}...</p>
                </Flex>
              </div>
            </Space>
          </Flex>
        ))}
      </div>
      {modal}
    </div>
  );
};

export default ChatList;
