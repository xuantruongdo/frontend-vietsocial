import { IoHome } from "react-icons/io5";
import "./SidebarChat.scss";
import { FaBirthdayCake, FaFilm, FaFlag } from "react-icons/fa";
import { HiPhotograph, HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import { message } from "antd";

const SidebarChat = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('The feature is currently under development!');
  };
  return (
    <div className="sidebar__chat">
      {contextHolder}
      <Link to="/">
        <div className="item">
          <IoHome style={{ fontSize: 20, color: "#2563EB" }} />
        </div>
      </Link>
      <div className="item" onClick={info}>
        <FaFlag style={{ fontSize: 20, color: "#F59E0B" }} />
      </div>
      <div className="item" onClick={info}>
        <HiPhotograph style={{ fontSize: 20, color: "#8B5CF6" }} />
      </div>
      <div className="item" onClick={info}>
        <FaFilm style={{ fontSize: 20, color: "#EF4444" }} />
      </div>
      <div className="item" onClick={info}>
        <HiUserGroup style={{ fontSize: 20, color: "#3B82F6" }} />
      </div>
      <div className="item" onClick={info}>
        <FaBirthdayCake style={{ fontSize: 20, color: "#F59E0B" }} />
      </div>
    </div>
  );
};

export default SidebarChat;
