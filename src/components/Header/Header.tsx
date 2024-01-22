import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Avatar, Badge, Image, Popover } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Header = () => {

  return (
    <header>
      <div className="logo">
        <Image preview={false} src={logo} width={70} />
      </div>
      <div className="header__search">
        <SearchOutlined className="header__search-icon" />
        <input type="text" placeholder="Basic usage" />
      </div>
      <div className="header__widgets">
        <Popover placement="bottom" content="Notifications">
          <Badge count={5}>
            <div className="icon">
              <BellOutlined />
            </div>
          </Badge>
        </Popover>
        <Popover placement="bottom" content="Messages">
          <Badge count={5}>
            <div className="icon">
              <MessageOutlined />
            </div>
          </Badge>
        </Popover>

        <div className="icon">
          <Avatar src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
