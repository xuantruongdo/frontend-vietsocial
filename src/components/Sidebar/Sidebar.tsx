import { CiLogin } from "react-icons/ci";
import "./Sidebar.scss";
import { FaBirthdayCake, FaFilm, FaFlag } from "react-icons/fa";
import { HiPhotograph, HiUserGroup } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const currentUser = useSelector((state: any) => state.account.user);
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <Link to="/">
          <div className="item">
            <IoHome style={{ fontSize: 20, color: "#2563EB" }} />
            <span> Feed </span>
          </div>
        </Link>

        <div className="item">
          <FaFlag style={{ fontSize: 20, color: "#F59E0B" }} />
          <span> Pages </span>
        </div>
        <div className="item">
          <HiPhotograph style={{ fontSize: 20, color: "#8B5CF6" }} />
          <span> Photos </span>
        </div>
        <div className="item">
          <FaFilm style={{ fontSize: 20, color: "#EF4444" }} />
          <span> Videos </span>
        </div>
        <div className="item">
          <HiUserGroup style={{ fontSize: 20, color: "#3B82F6" }} />
          <span> Groups </span>
        </div>
        <div className="item">
          <FaBirthdayCake style={{ fontSize: 20, color: "#F59E0B" }} />
          <span> Birthdays </span>
        </div>
        {!currentUser?._id && (
          <Link to={"/login"}>
            <div className="item login__sidebar">
              <CiLogin style={{ fontSize: 20, color: "#F59E0B" }} />
              <span> Login </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
