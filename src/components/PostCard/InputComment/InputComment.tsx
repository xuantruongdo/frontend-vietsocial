import { Button, Col, Flex, Input, Row } from "antd";
import { IoSend } from "react-icons/io5";

const InputComment = () => {
  return (
    <div className="post__comments">
      <Flex align="center" justify="space-between" gap={20}>
        <Input placeholder="Add your comment..." />
        <Button type="primary">
          <IoSend />
        </Button>
      </Flex>
    </div>
  );
};

export default InputComment;
