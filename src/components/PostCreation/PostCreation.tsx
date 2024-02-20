import { MdInsertPhoto } from "react-icons/md";
import "./PostCreation.scss";
import { Avatar, Card, Col, Flex, Row, Space } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { FaFaceLaugh } from "react-icons/fa6";
import useModal from "../../hooks/useModal";
import ModalCreationPost from "./ModalCreationPost";

const PostCreation = () => {
  const { modal, showModal } = useModal({
    title: "Create a post",
    content: <ModalCreationPost />,
  });
  return (
    <div className="post__creation">
      <Card>
        <Flex align="center" gap={20}>
          <div>
            <Avatar
              size={46}
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
            />
          </div>
          <input type="text" placeholder="What's on your mind ?" />
        </Flex>

        <Flex
          align="center"
          justify="space-between"
          style={{ flexWrap: "wrap" }}
        >
          <Space
            style={{ cursor: "pointer", marginTop: 20 }}
            onClick={showModal}
          >
            <div className="icon photo">
              <MdInsertPhoto style={{ fontSize: 20 }} />
            </div>
            <p>Photo / Video</p>
          </Space>
          <Space style={{ cursor: "pointer", marginTop: 20 }}>
            <div className="icon tag">
              <FaUserPlus style={{ fontSize: 20 }} />
            </div>
            <p>Tag Friend</p>
          </Space>
          <Space style={{ cursor: "pointer", marginTop: 20 }}>
            <div className="icon feeling">
              <FaFaceLaugh style={{ fontSize: 20 }} />
            </div>
            <p>Feeling / Activity</p>
          </Space>
        </Flex>
      </Card>
      {modal}
    </div>
  );
};

export default PostCreation;
