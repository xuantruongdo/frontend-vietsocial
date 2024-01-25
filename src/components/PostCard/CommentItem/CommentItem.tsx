import { Avatar, Col, Row, Space, Typography } from "antd";
import { FaHeart } from "react-icons/fa";

const CommentItem = () => {
  return (
    <Row justify="space-between" align={"middle"} style={{ marginTop: 20 }}>
      <Col xs={24} sm={18}>
        <Space>
          <Avatar
            size={40}
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          />
          <Space direction="vertical" style={{rowGap: 0}}>
            <h4>Truong Do</h4>
          <Typography style={{ textAlign: "justify" }}>
            this is a comment this is a comment
          </Typography>
        </Space>
        </Space>
      </Col>
      <Col xs={0} sm={6}>
        <Space>
          <Space direction="vertical">
            <FaHeart color="red" />
            <p style={{ fontSize: 10 }}>123</p>
          </Space>
          <span>a day ago</span>
        </Space>
      </Col>
    </Row>
  );
};

export default CommentItem;
