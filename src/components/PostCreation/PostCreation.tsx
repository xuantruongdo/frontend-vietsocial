import { MdInsertPhoto } from "react-icons/md";
import "./PostCreation.scss";
import { Card, Col, Row, Space } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { FaFaceLaugh } from "react-icons/fa6";
import useModal from "../../hooks/useModal";
import ModalCreationPost from "./ModalCreationPost";

const PostCreation = () => {
  const { modal, showModal } = useModal({
    title: "Create a post",
    content: (
      <ModalCreationPost/>
    ),
  });
  return (
    <div className="post__creation">
      <Card>
        <div className="user__info">
          <img
            src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
            alt=""
          />
          <input type="text" placeholder="What's on your mind ?" />
        </div>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col xs={8}>
            <Space style={{cursor: 'pointer'}} onClick={showModal}>
              <div className="icon photo">
                <MdInsertPhoto style={{ fontSize: 20 }} />
              </div>
              <p>Photo / Video</p>
            </Space>
          </Col>
          <Col xs={8}>
            <Space style={{cursor: 'pointer'}}>
              <div className="icon tag">
                <FaUserPlus style={{ fontSize: 20 }} />
              </div>
              <p>Tag Friend</p>
            </Space>
          </Col>
          <Col xs={8}>
            <Space style={{cursor: 'pointer'}}>
              <div className="icon feeling">
                <FaFaceLaugh style={{ fontSize: 20 }} />
              </div>
              <p>Feeling / Activity</p>
            </Space>
          </Col>
        </Row>
      </Card>
      {modal}
    </div>
  );
};

export default PostCreation;
