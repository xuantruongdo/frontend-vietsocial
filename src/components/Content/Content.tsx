import PostCard from "../PostCard/PostCard";
import PostCreation from "../PostCreation/PostCreation";
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
          <div style={{marginTop: "20px"}}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
        <Rightbar/>
    </div>
  );
};

export default Content;
