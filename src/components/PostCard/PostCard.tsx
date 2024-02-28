import { Button, Card, Image, Input, message, notification } from "antd";
import "./PostCard.scss";
import { IoIosMore } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import DropdownComponent from "../Dropdown/Dropdown";
import { MdDelete } from "react-icons/md";
import useModal from "../../hooks/useModal";
import CommentPreview from "./CommentPreview/CommentPreview";
import PostAction from "./PostAction/PostAction";
import UserPostHeading from "./UserPostHeading/UserPostHeading";
import { BASE_URL } from "../../constants/constants";
import { useSelector } from "react-redux";
import {
  callDeletePost,
  callUpdatePost,
  callUploadSingleFile,
} from "../../api/api";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";

interface IProps {
  post: IPost;
  fetchPosts: any;
}

const PostCard = (props: IProps) => {
  const { post, fetchPosts } = props;

  const currentUser = useSelector((state: any) => state.account.user);
  const [content, setContent] = useState<string>(post?.content);
  const [image, setImage] = useState<string>(post?.image);

  const propsUpload = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    accept: ".png, .jpg, .jpeg",
    async customRequest({ file, onSuccess, onError }: any) {
      const res = await callUploadSingleFile(file);

      if (res && res.data) {
        setImage(res.data.fileName);
        if (onSuccess) onSuccess("ok");
      } else {
        if (onError) {
          const error = new Error(res.message);
          onError({ event: error });
        }
      }
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(
          info?.file?.error?.event?.message ??
            "An error occurred while uploading the file"
        );
      }
    },
  };

  const handleUpdatePost = async () => {
    const data = { content, image };
    const res = await callUpdatePost(post?._id, data);
    if (res && res.data) {
      message.success("Edited post successfully");
      fetchPosts();
      handleCancelEditPost();
    }
  };

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

  const { modal: modalComment, showModal: showModalComment } = useModal({
    content: <CommentPreview post={post} />,
  });

  const {
    modal: modalEditPost,
    showModal: showModalEditPost,
    handleCancel: handleCancelEditPost,
  } = useModal({
    title: "Update Post",
    content: (
      <>
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        {image ? (
          <div style={{ position: "relative" }}>
            <Image
              src={`${BASE_URL}/images/${image}`}
              alt="image"
              preview={false}
              style={{ cursor: "pointer", width: "100%" }}
            />

            <div
              className="icon"
              style={{ position: "absolute", top: 10, right: 10 }}
              onClick={() => setImage("")}
            >
              <FaXmark />
            </div>
          </div>
        ) : (
          <Dragger {...propsUpload}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        )}
        <Button
          type="primary"
          style={{ width: "100%", marginTop: 10 }}
          onClick={handleUpdatePost}
        >
          Save
        </Button>
      </>
    ),
  });

  const itemsDropdown = [
    {
      label: (
        <label onClick={showModalEditPost}>
          <p>Edit Post</p>
        </label>
      ),
      key: "edit-post",
      icon: <FaEdit />,
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
          <DropdownComponent
            items={itemsDropdown}
            icon={<IoIosMore />}
            type="postAction"
          />
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
              onClick={showModalComment}
              style={{ cursor: "pointer", width: "100%" }}
            />
          </div>
        )}
      </div>

      <PostAction post={post} showModal={showModalComment} />
      {modalComment}
      {modalEditPost}
    </Card>
  );
};

export default PostCard;
