import { Avatar, Flex, Space, Tag, Typography } from "antd";
import { BASE_URL } from "../../../constants/constants";
import moment from "moment";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";

interface IProps {
  comment: IComment;
}
const CommentItem = (props: IProps) => {
  const { comment } = props;
  return (
    <Flex
      align="center"
      justify="space-between"
      gap={20}
      style={{ padding: "6px 0" }}
    >
      <Flex align="start" gap={10}>
        <Link to={`/profile/${comment?.user._id}`}>
          <div>
            <Avatar
              size={38}
              src={`${BASE_URL}/images/${comment?.user.avatar}`}
            />
          </div>
        </Link>
        <Space direction="vertical" style={{ rowGap: 0 }}>
          <Link to={`/profile/${comment?.user._id}`}>
          <Flex gap={10} align="center">
          <h4>{comment?.user.fullname}</h4>
            {comment?.user.isVerify && <MdVerified color="#0866FF" />}
          </Flex>
            
          </Link>

          <Typography>{comment?.content}</Typography>
        </Space>
      </Flex>

      <Tag color="purple">{moment(comment?.createdAt).fromNow()}</Tag>
    </Flex>
  );
};

export default CommentItem;
