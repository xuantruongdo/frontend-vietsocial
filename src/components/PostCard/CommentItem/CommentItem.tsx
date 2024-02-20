import {
  Avatar,
  Flex,
  Space,
  Tag,
  Typography,
} from "antd";
import { FaHeart } from "react-icons/fa";

const CommentItem = () => {
  return (
    <Flex align="center" justify="space-between" gap={20}>
      <Flex align="start" gap={10}>
        <div>
          <Avatar
            size={38}
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          />
        </div>
        <Space direction="vertical" style={{ rowGap: 0 }}>
          <h4>TruongDo</h4>

          <Typography>
            this is a comment this is a commentthis is a commentthis is a
            comment this is a commentthis is a comment this is a comment this is
            a commentthis is a comment
          </Typography>
          <Space>
            <FaHeart color="red" />
            <p style={{ fontSize: 10 }}>123</p>
          </Space>
        </Space>
      </Flex>

      <Tag color="purple">a day ago</Tag>
    </Flex>
  );
};

export default CommentItem;
