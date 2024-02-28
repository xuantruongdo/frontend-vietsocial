import PostCreation from "../PostCreation/PostCreation";
import PostList from "../PostList/PostList";
import Rightbar from "../Rightbar/Rightbar";
import Story from "../Story/Story";
import "./Content.scss";
import { Empty } from "antd";
import { useSelector } from "react-redux";

interface IProps {
  posts: IPost[];
  fetchPosts: any;
  onlineUsers: IUser[];
}

const Content = (props: IProps) => {
  const { posts, fetchPosts, onlineUsers } = props;
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
            {posts.length > 0 ? (
              <PostList posts={posts} fetchPosts={fetchPosts} />
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </div>
      <Rightbar onlineUsers={onlineUsers} />
    </div>
  );
};

export default Content;
