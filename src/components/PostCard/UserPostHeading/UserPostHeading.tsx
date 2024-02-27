import { Avatar, Space } from "antd";
import { BASE_URL } from "../../../constants/constants";
import moment from "moment";
import { Link } from "react-router-dom";

interface IProps {
  post: IPost;
}

const UserPostHeading = (props: IProps) => {
  const { post } = props;
  return (
    <Space>
      <Link to={`/profile/${post.author._id}`}>
        <Avatar size={38} src={`${BASE_URL}/images/${post.author.avatar}`} />
      </Link>
      <Space direction="vertical" style={{ rowGap: 0 }}>
        <Link to={`/profile/${post.author._id}`}>
          <h4>{post.author.fullname}</h4>
        </Link>

        <p>{moment(post.createdAt).fromNow()}</p>
      </Space>
    </Space>
  );
};

export default UserPostHeading;
