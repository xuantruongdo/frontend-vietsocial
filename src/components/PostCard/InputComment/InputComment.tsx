import { Button, Col, Input, Row } from "antd";
import { IoSend } from "react-icons/io5";

const InputComment = () => {
  return (
    <div className="post__comments">
      <Row gutter={[16, 16]} align="middle">
        <Col span={20}>
          <Input placeholder="Add your comment..." />
        </Col>
        <Col span={4}>
          <Button type="primary">
            <IoSend />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default InputComment;
