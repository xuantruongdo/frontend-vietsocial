import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import { Flex } from "antd";
import { useEffect, useState } from "react";
import { callFetchPosts } from "../../api/api";

interface IProps{
  onlineUsers: IUser[];
}
const Feed = (props: IProps) => {
  const { onlineUsers } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const fetchPosts = async () => {
    setLoading(true);
    const res = await callFetchPosts();
    setLoading(false);

    if (res && res.data) {
      setPosts(res.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Flex>
      <Sidebar />
      <Content posts={posts} fetchPosts={fetchPosts} loading={loading} onlineUsers={onlineUsers} />
    </Flex>
  );
};

export default Feed;
