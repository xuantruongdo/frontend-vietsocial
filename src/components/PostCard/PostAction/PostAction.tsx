import { Flex, Space, notification } from "antd";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { callLike } from "../../../api/api";
import { useState } from "react";
import useSocket from "../../../hooks/useSocket";

interface IProps {
  post: IPost;
  showModal: any;
}
const PostAction = (props: IProps) => {
  const { post, showModal } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const [likedPost, setLikedPost] = useState<IPost>(post);
  const socket = useSocket();

  const handleLike = async () => {
    const res = await callLike(post?._id);
    if (res && res.data) {
      setLikedPost(res.data);
      if (
        !likedPost?.likes?.some(
          (user: any) => user?._id === currentUser?._id
        ) &&
        res?.data?.author?._id !== currentUser?._id
      ) {
        socket?.emit("like", {
          sender: currentUser,
          post: res?.data,
          type: "like",
          createdAt: new Date(),
        });
      }
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
  return (
    <div className="post__action">
      <Flex gap={30}>
        <Space>
          <div className="icon" onClick={handleLike}>
            <FaHeart
              color={
                likedPost?.likes?.some((t: any) => t._id === currentUser?._id)
                  ? "red"
                  : "#aaa"
              }
            />
          </div>
          <strong>{likedPost?.likes.length}</strong>
        </Space>
        <Space>
          <div className="icon" onClick={showModal}>
            <FaCommentDots color="#aaa" />
          </div>
          <strong>{likedPost?.comments.length}</strong>
        </Space>
      </Flex>
    </div>
  );
};

export default PostAction;
