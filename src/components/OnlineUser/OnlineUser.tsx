import "./OnlineUser.scss";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const OnlineUser = () => {
  return (
    <>
      <Space direction="vertical">
        <Space style={{cursor: 'pointer', marginTop: 10}}>
          <div className="contact__avatar">
            <Avatar icon={<UserOutlined />} />
            <span className="user_status status_online"></span>
          </div>
          <div className="contact__username"> Dennis Han</div>
        </Space>

        <Space style={{cursor: 'pointer', marginTop: 10}}>
          <div className="contact__avatar">
            <Avatar icon={<UserOutlined />} />
            <span className="user_status status_online"></span>
          </div>
          <div className="contact__username"> Dennis Han</div>
        </Space>
      </Space>
    </>
  );
};

export default OnlineUser;
