import { HomeOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import { FaHeart, FaRss } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  return (
    <Card title="About">
      <Space direction="vertical">
        <Space>
          <div className="icon">
            <HomeOutlined />
          </div>
          <span>Live In</span>
          <strong>Cairo , Eygept</strong>
        </Space>
        <Space>
          <div className="icon">
            <FaLocationDot />
          </div>
          <span>From</span>
          <strong>Hanoi , Vietnam</strong>
        </Space>
        <Space>
          <div className="icon">
            <FaHeart />
          </div>
          <span>Relationship</span> <strong>Single</strong>
        </Space>
        <Space>
          <div className="icon">
            <FaRss />
          </div>
          <span>Followed by</span>
          <strong>1.000.000 People</strong>
        </Space>
      </Space>
      <Button className="btn" style={{ margin: "10px 0" }}>
        Edit
      </Button>
    </Card>
  );
};

export default About;
