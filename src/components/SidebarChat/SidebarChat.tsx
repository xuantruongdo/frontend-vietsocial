import { IoHome } from "react-icons/io5";
import "./SidebarChat.scss";
import { FaBirthdayCake, FaFilm, FaFlag } from "react-icons/fa";
import { HiPhotograph, HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const SidebarChat = () => {
  return (
    <div className="sidebar__chat">
      <Link to="/">
        <div className="item">
          <IoHome style={{ fontSize: 20, color: "#2563EB" }} />
        </div>
      </Link>
      <div className="item">
        <FaFlag style={{ fontSize: 20, color: "#F59E0B" }} />
      </div>
      <div className="item">
        <HiPhotograph style={{ fontSize: 20, color: "#8B5CF6" }} />
      </div>
      <div className="item">
        <FaFilm style={{ fontSize: 20, color: "#EF4444" }} />
      </div>
      <div className="item">
        <HiUserGroup style={{ fontSize: 20, color: "#3B82F6" }} />
      </div>
      <div className="item">
        <FaBirthdayCake style={{ fontSize: 20, color: "#F59E0B" }} />
      </div>
    </div>
  );
};

export default SidebarChat;
