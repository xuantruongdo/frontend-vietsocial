import "./Chat.scss";
import SidebarChat from "../../components/SidebarChat/SidebarChat";
import ChatBox from "../../components/ChatBox/ChatBox";
import ChatList from "../../components/ChatList/ChatList";
import { Col, Row } from "antd";

const Chat = () => {
  return (
    <div className="chat">
      <SidebarChat />
      <Row style={{marginLeft: 80}}>
        <Col xs={0} lg={6}>
          <ChatList />
        </Col>
        <Col xs={24} lg={18}>
          <ChatBox />
        </Col>
      </Row>
    </div>
  );
};

export default Chat;
