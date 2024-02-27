import "./Chat.scss";
import SidebarChat from "../../components/SidebarChat/SidebarChat";
import ChatBox from "../../components/ChatBox/ChatBox";
import ChatList from "../../components/ChatList/ChatList";
import { Button, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { callFetchChats, callFetchMessagesWithChat } from "../../api/api";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import useDrawer from "../../hooks/useDrawer";

const Chat = () => {
  const selectedChat = useSelector((state: any) => state.chat.selectedChat);
  const [chats, setChats] = useState<IChat[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchChats = async () => {
    const res = await callFetchChats();
    if (res && res.data) {
      setChats(res.data);
    }
  };

  const fetchMessagesWithChat = async () => {
    if (!selectedChat) return;
    const res = await callFetchMessagesWithChat(selectedChat?._id);
    if (res && res.data) {
      setMessages(res.data);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    fetchMessagesWithChat();
  }, [selectedChat?._id]);

  const { drawer, showDrawer } = useDrawer({
    title: "Chat List",
    content: <ChatList chats={chats} />,
    placement: "right",
  });

  return (
    <div className="chat">
      <SidebarChat />
      <Row style={{ marginLeft: 80 }}>
        <Col xs={0} lg={6}>
          <ChatList chats={chats} fetchChats={fetchChats} />
        </Col>
        <Col xs={24} lg={18}>
          <>
            <Col xs={24} lg={0}>
              <Button style={{margin: 5}}
                onClick={showDrawer}
              >
                <FaEdit />
              </Button>
            </Col>
            {selectedChat && (
              <ChatBox
                messages={messages}
                setMessages={setMessages}
                fetchMessagesWithChat={fetchMessagesWithChat}
                fetchChats={fetchChats}
              />
            )}
          </>
        </Col>
      </Row>

      {drawer}
    </div>
  );
};

export default Chat;
