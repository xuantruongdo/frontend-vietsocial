import "./CommentPreview.scss";
import { Col, Image, Row } from "antd";
import InputComment from "../InputComment/InputComment";
import CommentItem from "../CommentItem/CommentItem";
import UserPostHeading from "../UserPostHeading/UserPostHeading";
import { BASE_URL } from "../../../constants/constants";
import { callComment } from "../../../api/api";
import { useState } from "react";
import useSocket from "../../../hooks/useSocket";
import { useSelector } from "react-redux";

interface IProps {
  post: IPost;
}
const CommentPreview = (props: IProps) => {
  const { post } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const [content, setContent] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>(post?.comments);
  const socket = useSocket();

  const handleComment = async (content: string) => {
    const res = await callComment(post?._id, content);
    if (res && res.data) {
      setComments(res.data.comments);
      setContent("");
      if (res?.data?.author !== currentUser._id) {
        socket?.emit("comment", {
          sender: currentUser,
          post: res?.data,
          type: "comment",
          createdAt: new Date(),
        });
      }
    }
  };

  return (
    <Row gutter={[16, 16]} align={"middle"}>
      <Col span={24}>
        <UserPostHeading post={post} />
        <Col span={24}>
          <div style={{ marginTop: 20 }}>
            {post?.image && (
              <Image src={`${BASE_URL}/images/${post.image}`} alt="image" />
            )}
          </div>

          <p style={{ marginTop: 20 }}>{post.content}</p>
        </Col>

        <InputComment
          content={content}
          setContent={setContent}
          handleComment={handleComment}
        />

        <div className="comment_list">
          {comments?.map((comment: IComment) => (
            <CommentItem key={comment?._id} comment={comment} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default CommentPreview;
