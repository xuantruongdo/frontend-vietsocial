import "./CommentPreview.scss";
import {
  Col,
  Image,
  Row,
} from "antd";
import PostAction from "../PostAction/PostAction";
import InputComment from "../InputComment/InputComment";
import CommentItem from "../CommentItem/CommentItem";
import UserPostHeading from "../UserPostHeading/UserPostHeading";

const CommentPreview = () => {
  return (
    <Row gutter={[16, 16]} align={"middle"}>
      <Col span={24}>
        <Image
          src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          alt="image"
        />
      </Col>
      <Col span={24}>
        <UserPostHeading />

        <PostAction />

        <InputComment />

        <div className="comment_list">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </Col>
    </Row>
  );
};

export default CommentPreview;
