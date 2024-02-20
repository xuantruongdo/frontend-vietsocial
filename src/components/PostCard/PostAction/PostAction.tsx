import { Flex, Space } from "antd";
import { FaCommentDots, FaHeart } from "react-icons/fa";

const PostAction = () => {
  return (
    <div className="post__action">
      <Flex gap={30}>
        <Space>
          <div className="icon">
            <FaHeart />
          </div>
          <strong>123</strong>
        </Space>
        <Space>
          <div className="icon">
            <FaCommentDots />
          </div>
          <strong>10</strong>
        </Space>
      </Flex>
    </div>
  );
};

export default PostAction;
