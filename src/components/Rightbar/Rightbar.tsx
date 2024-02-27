import { Card, Space, Tabs } from "antd";
import "./Rightbar.scss";
import GiftIcon from "../../assets/images/gift-icon.png";
import OnlineUser from "./OnlineUser/OnlineUser";
import ChatGroup from "./ChatGroup/ChatGroup";



interface IProps {
  onlineUsers: IUser[];
}
const Rightbar = (props: IProps) => {
  const { onlineUsers } = props;
  const items = [
    {
      label: "Online",
      key: "1",
      children: <OnlineUser onlineUsers={onlineUsers} />,
    },
    {
      label: "Chat Groups",
      key: "2",
      children: <ChatGroup />,
    },
  ];

  return (
    <div className="rightbar">
      <Card title="Birthdays">
        <Space>
          <img src={GiftIcon} alt="gift_icon" />
          <div>
            <strong>Jessica Erica</strong> and <strong>two others</strong> have
            a birthdays to day.
          </div>
        </Space>
      </Card>

      <div className="contact">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default Rightbar;
