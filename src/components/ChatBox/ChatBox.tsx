import "./ChatBox.scss";
import {
  Avatar,
  Button,
  Flex,
  Input,
  Popconfirm,
  Popover,
  message,
  notification,
} from "antd";
import ScrollableFeed from "react-scrollable-feed";
import { IoArrowRedoOutline, IoSend } from "react-icons/io5";
import { BASE_URL } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { checkReceiver } from "../../helpers/checkReceiver";
import { useEffect, useState } from "react";
import { callLeaveGroupChat, callSendMessage } from "../../api/api";
import { doSelectedChatAction } from "../../redux/chat/chatSlice";
import useSocket from "../../hooks/useSocket";

interface IProps {
  messages: IMessage[];
  setMessages: any;
  fetchMessagesWithChat: any;
  fetchChats: any;
}
const ChatBox = (props: IProps) => {
  const { messages, setMessages, fetchMessagesWithChat, fetchChats } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const selectedChat = useSelector((state: any) => state.chat.selectedChat);
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const socket = useSocket();


  const sendMessage = async () => {
    if (!content)
      return notification.error({
        message: "Type something to send",
        duration: 5,
      });
    const data = {
      content,
      chatId: selectedChat?._id,
    };
    const res = await callSendMessage(data);
    if (res && res.data) {
      setContent("");
      fetchMessagesWithChat();
      socket?.emit("joinRoom", selectedChat?._id);
      socket?.emit("sendMessage", {
        room: selectedChat?._id,
        message: res.data,
      });
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

  useEffect(() => {
    socket?.on("newMessage", (message: any) => {
      setMessages((prevMessages: any) => [...prevMessages, message]);
    });

    return () => {
      socket?.off(`newMessage`);
    };
  }, [socket]);

  const confirm = async () => {
    const res = await callLeaveGroupChat(selectedChat?._id);
    if (res && res.data) {
      message.success("Successfully left the chat");
      dispatch(doSelectedChatAction(null));
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

  return (
    <div className="chatbox">
      <Flex align="center" justify="space-between" className="heading">
        <h3>
          {selectedChat?.isGroupChat
            ? selectedChat?.chatName
            : checkReceiver(selectedChat?.users, currentUser?._id)?.fullname}
        </h3>
        {selectedChat?.isGroupChat && (
          <Popconfirm
            title="Delete the group"
            description="Are you sure to leave this group?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              <IoArrowRedoOutline color="red" />
            </Button>
          </Popconfirm>
        )}
      </Flex>

      <div className="chatbox__content">
        <ScrollableFeed>
          {messages?.map((message: IMessage) => (
            <Flex
              align="center"
              justify={
                message?.sender._id === currentUser?._id
                  ? "flex-end"
                  : "flex-start"
              }
              gap={10}
              style={{ margin: "10px 0" }}
              key={message?._id}
            >
              <div>
                {message?.sender._id !== currentUser?._id && (
                  <Popover
                    content={message?.sender.fullname}
                    trigger="hover"
                    placement="bottom"
                  >
                    <Avatar
                      size={44}
                      src={`${BASE_URL}/images/${message?.sender.avatar}`}
                      alt="avatar"
                    />
                  </Popover>
                )}
              </div>
              <Popover
                content={moment(message?.createdAt).fromNow()}
                trigger="hover"
                placement="bottom"
              >
                <div
                  className="text"
                  style={{
                    backgroundColor:
                      message?.sender._id === currentUser?._id
                        ? "#2a41e8"
                        : "#f4f4f4",
                    color:
                      message?.sender._id === currentUser?._id
                        ? "white"
                        : "black",
                  }}
                >
                  <p>{message?.content}</p>
                </div>
              </Popover>
            </Flex>
          ))}
        </ScrollableFeed>
        <div className="send__wrapper">
          <Flex align="center" gap={10}>
            <Input
              placeholder="Your content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <Button type="primary" onClick={sendMessage}>
              <IoSend />
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
