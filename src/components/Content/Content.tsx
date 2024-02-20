import PostCreation from "../PostCreation/PostCreation";
import PostList from "../PostList/PostList";
import Rightbar from "../Rightbar/Rightbar";
import Story from "../Story/Story";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="feed__inner">
        <Story />
        <div>
          <PostCreation />
          <PostList />
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Content;
