import {
  Avatar,
  Flex,
  Space,
  Tag,
  Typography,
} from "antd";
import { FaHeart } from "react-icons/fa";
import { BASE_URL } from "../../../constants/constants";
import moment from "moment";

interface IProps{
  comment: IComment;
}
const CommentItem = (props: IProps) => {
  const { comment } = props;
  return (
    <Flex align="center" justify="space-between" gap={20} style={{padding: "6px 0"}}>
      <Flex align="start" gap={10}>
        <div>
          <Avatar
            size={38}
            src={`${BASE_URL}/images/${comment?.user.avatar}`}
          />
        </div>
        <Space direction="vertical" style={{ rowGap: 0 }}>
          <h4>{comment?.user.fullname}</h4>

          <Typography>
            {comment?.content}
          </Typography>
        </Space>
      </Flex>

      <Tag color="purple">{moment(comment?.createdAt).fromNow()}</Tag>
    </Flex>
  );
};

export default CommentItem;
