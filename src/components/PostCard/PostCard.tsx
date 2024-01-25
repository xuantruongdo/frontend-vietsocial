import {
  Card,
  Divider,
  Image,
} from "antd";
import "./PostCard.scss";
import { IoIosMore } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import DropdownComponent from "../Dropdown/Dropdown";
import { useState } from "react";
import { MdCommentsDisabled, MdDelete } from "react-icons/md";
import useModal from "../../hooks/useModal";
import CommentPreview from "./CommentPreview/CommentPreview";
import PostAction from "./PostAction/PostAction";
import CommentItem from "./CommentItem/CommentItem";
import InputComment from "./InputComment/InputComment";
import UserInfoComment from "./UserInfoComment/UserInfoComment";

let itemsDropdown = [
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
      <label>
        <p style={{ color: "red" }}>Delete Post</p>
      </label>
    ),
    key: "delete-post",
    icon: <MdDelete style={{ color: "red" }} />,
  },
];

const PostCard = () => {
  const [editVisible, setEditVisible] = useState<boolean | undefined>(
    undefined
  );

  const handleEditVisibleChange = (visibility: any) => {
    setEditVisible(visibility);
  };

  const { modal, showModal } = useModal({
    content: <CommentPreview />,
  });

  return (
    <Card className="post__single">
      <div className="post__heading">
        <UserInfoComment/>

        <DropdownComponent
          items={itemsDropdown}
          icon={<IoIosMore />}
          visible={editVisible}
          onVisibleChange={handleEditVisibleChange}
        />
      </div>

      <div className="image__wrapper">
        <p className="caption">This is my caption</p>
        <Image
          src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          alt="image"
          preview={false}
          onClick={showModal}
          style={{ cursor: "pointer", width: '100%' }}
        />
      </div>

      <PostAction />

      <Divider />

      <div className="post__comments">
        <CommentItem />

        <p className="view__more" onClick={showModal}>
          View 8 more comments
        </p>

        <InputComment />
      </div>
      {modal}
    </Card>
  );
};

export default PostCard;
