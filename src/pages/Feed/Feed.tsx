import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import { Flex, Spin } from "antd";
import { useEffect, useState } from "react";
import { callFetchPosts } from "../../api/api";
import { LoadingOutlined } from "@ant-design/icons";

interface IProps {
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
      {!loading ? (
        <Content
          posts={posts}
          fetchPosts={fetchPosts}
          onlineUsers={onlineUsers}
        />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      )}
    </Flex>
  );
};

export default Feed;
