import PostCard from "../PostCard/PostCard";

interface IProps {
  posts: IPost[];
  fetchPosts?: any;
}
const PostList = (props: IProps) => {
  const { posts, fetchPosts } = props;

  return (
    <div>
      {posts?.map((post) => (
        <PostCard key={post._id} post={post} fetchPosts={fetchPosts} />
      ))}
    </div>
  );
};

export default PostList;
