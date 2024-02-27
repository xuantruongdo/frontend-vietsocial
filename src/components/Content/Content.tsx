import PostCreation from "../PostCreation/PostCreation";
import PostList from "../PostList/PostList";
import Rightbar from "../Rightbar/Rightbar";
import Story from "../Story/Story";
import "./Content.scss";
import { Empty, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

interface IProps {
  posts: IPost[];
  fetchPosts: any;
  loading: boolean;
  onlineUsers: IUser[];
}

const Content = (props: IProps) => {
  const { posts, fetchPosts, loading, onlineUsers } = props;
  const currentUser = useSelector((state: any) => state.account.user);

  return (
    <div className="content">
      <div className="feed__inner">
        <Story />
        <div>
          {currentUser?._id && <PostCreation fetchPosts={fetchPosts} />}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin
              spinning={loading}
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            >
              {posts.length > 0 ? (
                <PostList posts={posts} fetchPosts={fetchPosts} />
              ) : (
                <Empty />
              )}
            </Spin>
          </div>
        </div>
      </div>
      <Rightbar onlineUsers={onlineUsers} />
    </div>
  );
};

export default Content;
