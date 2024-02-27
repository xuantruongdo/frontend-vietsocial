import { Card, Image, message, notification } from "antd";
import "./PostCard.scss";
import { IoIosMore } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import DropdownComponent from "../Dropdown/Dropdown";
import { MdCommentsDisabled, MdDelete } from "react-icons/md";
import useModal from "../../hooks/useModal";
import CommentPreview from "./CommentPreview/CommentPreview";
import PostAction from "./PostAction/PostAction";
import UserPostHeading from "./UserPostHeading/UserPostHeading";
import { BASE_URL } from "../../constants/constants";
import { useSelector } from "react-redux";
import { callDeletePost } from "../../api/api";

interface IProps {
  post: IPost;
  fetchPosts: any;
}

const PostCard = (props: IProps) => {
  const { post, fetchPosts } = props;

  const currentUser = useSelector((state: any) => state.account.user);

  const { modal, showModal } = useModal({
    content: <CommentPreview post={post} />,
  });

  const handleDeletePost = async () => {
    const res = await callDeletePost(post?._id);
    if (res && res.data) {
      message.success("Post deleted successfully");
      fetchPosts();
    } else {
      notification.error({
        message: "An error occurred",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  const itemsDropdown = [
    {
      label: (
        <label>
          <p>Edit Post</p>
        </label>
      ),
      key: "edit-post",
      icon: <FaEdit />,
    },
    {
      label: (
        <label>
          <p>Disable Comment</p>
        </label>
      ),
      key: "disable-comment",
      icon: <MdCommentsDisabled />,
    },
    {
      label: (
        <label onClick={handleDeletePost}>
          <p style={{ color: "red" }}>Delete Post</p>
        </label>
      ),
      key: "delete-post",
      icon: <MdDelete style={{ color: "red" }} />,
    },
  ];

  return (
    <Card className="post__single">
      <div className="post__heading">
        <UserPostHeading post={post} />

        {currentUser?._id === post?.author._id && (
          <DropdownComponent items={itemsDropdown} icon={<IoIosMore />} />
        )}
      </div>

      <div className="image__wrapper">
        <p className="caption">{post?.content}</p>
        {post?.image && (
          <div style={{ textAlign: "center" }}>
            <Image
              src={`${BASE_URL}/images/${post.image}`}
              alt="image"
              preview={false}
              onClick={showModal}
              style={{ cursor: "pointer", width: "100%" }}
            />
          </div>
        )}
      </div>

      <PostAction post={post} showModal={showModal} />
      {modal}
    </Card>
  );
};

export default PostCard;
