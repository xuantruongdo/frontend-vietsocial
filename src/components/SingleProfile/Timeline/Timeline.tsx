import { Col, Empty, Row, Space } from "antd";
import PostCreation from "../../PostCreation/PostCreation";
import PostList from "../../PostList/PostList";
import About from "./About/About";
import { useSelector } from "react-redux";
import { callFetchPostsWithAuthor } from "../../../api/api";
import { useEffect, useState } from "react";

interface IProps {
  singleUser: IUser;
}
const Timeline = (props: IProps) => {
  const { singleUser } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPostsWithAuthor = async () => {
    if (!singleUser?._id) return;
    const res = await callFetchPostsWithAuthor(singleUser?._id);
    if (res && res.data) {
      setPosts(res.data);
    }
  };

  useEffect(() => {
    fetchPostsWithAuthor();
  }, [singleUser]);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={16}>
        {currentUser?._id === singleUser?._id && (
          <PostCreation fetchPosts={fetchPostsWithAuthor} />
        )}
        {posts.length > 0 ? (
          <PostList posts={posts} fetchPosts={fetchPostsWithAuthor} />
        ) : (
          <Empty />
        )}
      </Col>
      <Col xs={0} md={8}>
        <Space direction="vertical">
          <About singleUser={singleUser} />
        </Space>
      </Col>
    </Row>
  );
};

export default Timeline;
