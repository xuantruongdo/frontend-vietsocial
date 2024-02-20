import { Card, Space } from "antd";
import { CiGlobe } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { IoUnlink } from "react-icons/io5";

const AboutGroup = () => {
  return (
    <Card title="About">
      <Space direction="vertical">
        <Space>
          <div className="icon">
            <FaUserFriends />
          </div>
          <span>12 Members</span>
        </Space>
        <Space>
          <div className="icon">
            <CiGlobe />
          </div>
          <div>
            <strong>Public</strong>
            <span style={{ fontSize: 12, marginLeft: 10, color: "#999" }}>
              (Anyone can see who's in the group and what they post.)
            </span>
          </div>
        </Space>
        <Space>
          <div className="icon">
            <IoUnlink />
          </div>
          <span>https://mydomain.com</span>
        </Space>
      </Space>
    </Card>
  );
};

export default AboutGroup;
