import { Col, Row, Space } from "antd";
import PostCreation from "../../PostCreation/PostCreation";
import PostList from "../../PostList/PostList";
import About from "./About/About";
import FriendTimeline from "./FriendTimeline/FriendTimeline";

const Timeline = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={16}>
        <PostCreation />
        <PostList />
      </Col>
      <Col xs={0} md={8}>
        <Space direction="vertical">
          <About />
          <FriendTimeline />
        </Space>
      </Col>
    </Row>
  );
};

export default Timeline;
