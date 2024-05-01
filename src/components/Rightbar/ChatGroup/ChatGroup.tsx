import { Avatar, Space } from "antd";
import { useEffect, useState } from "react";
import { callFetchGroupChats } from "../../../api/api";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doSelectedChatAction } from "../../../redux/chat/chatSlice";

const ChatGroup = () => {
  const [groupChats, setGroupChats] = useState<IChat[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchGroupChats = async () => {
    const res = await callFetchGroupChats();
    if (res && res.data) {
      setGroupChats(res.data);
    }
  };

  useEffect(() => {
    fetchGroupChats();
  }, []);

  const accessChat = (chat: IChat) => {
    navigate("/chat");
    dispatch(doSelectedChatAction(chat));
  };

  return (
    <>
      {groupChats?.map((chat) => (
        <div
          key={chat?._id}
          onClick={() => accessChat(chat)}
        >
          <Space style={{ cursor: "pointer", marginTop: 10 }}>
            <div className="contact__avatar">
              <Avatar icon={<UserOutlined />} />
              <span className="user_status status_online"></span>
            </div>
            <div className="contact__username"> {chat?.chatName}</div>
          </Space>
        </div>
      ))}
    </>
  );
};

export default ChatGroup;
