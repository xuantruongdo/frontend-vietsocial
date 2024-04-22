import "./PostCreation.scss";
import { MdInsertPhoto } from "react-icons/md";
import { Avatar, Card, Flex, Space, message } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { FaFaceLaugh } from "react-icons/fa6";
import ModalCreationPost from "./ModalCreationPost";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/constants";
import { useRef, useState } from "react";

interface IProps {
  fetchPosts?: any;
}
const PostCreation = (props: IProps) => {
  const { fetchPosts } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useSelector((state: any) => state.account.user);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("The feature is currently under development!");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="post__creation">
      {contextHolder}
      <Card>
        <Flex align="center" gap={20}>
          <div>
            <Avatar
              size={46}
              src={`${BASE_URL}/images/${user?.avatar}`}
              alt="avatar"
            />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="What's on your mind?"
            onClick={showModal}
          />
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
          <Space style={{ cursor: "pointer", marginTop: 20 }} onClick={info}>
            <div className="icon tag">
              <FaUserPlus style={{ fontSize: 20 }} />
            </div>
            <p>Tag Friend</p>
          </Space>
          <Space style={{ cursor: "pointer", marginTop: 20 }} onClick={info}>
            <div className="icon feeling">
              <FaFaceLaugh style={{ fontSize: 20 }} />
            </div>
            <p>Feeling / Activity</p>
          </Space>
        </Flex>
      </Card>
      <ModalCreationPost
        fetchPosts={fetchPosts}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default PostCreation;
