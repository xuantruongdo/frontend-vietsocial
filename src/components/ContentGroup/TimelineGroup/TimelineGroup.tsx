import { Col, Row, Space } from "antd";
import PostCreation from "../../PostCreation/PostCreation";
import PostList from "../../PostList/PostList";
import AboutGroup from "../AboutGroup/AboutGroup";

const TimelineGroup = () => {
    return ( 
        <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <PostCreation />
          <PostList />
        </Col>
        <Col xs={0} md={8}>
          <Space direction="vertical">
            <AboutGroup />
          </Space>
        </Col>
      </Row>
     );
}
 
export default TimelineGroup;