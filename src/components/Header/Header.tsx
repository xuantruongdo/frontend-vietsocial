import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Image, Switch } from "antd";
import {
  BellOutlined,
  CheckSquareOutlined,
  FlagOutlined,
  LikeOutlined,
  LogoutOutlined,
  MenuOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import type { MenuProps } from "antd";
import { FaRegMoon } from "react-icons/fa";
import DropdownComponent from "../Dropdown/Dropdown";
import DropdownAccount from "../Dropdown/DropdownAccount";
import useDrawer from "../../hooks/useDrawer";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const notificationItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="drop_headline">
        <h4>Notifications </h4>
        <div className="btn_action">
          <a href="#">
            <SettingOutlined />
          </a>
          <a href="#">
            <CheckSquareOutlined />
          </a>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="notification__item">
        <div className="drop_avatar">
          <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
        <span className="drop_icon">
          <LikeOutlined />
        </span>
        <div className="drop_text">
          <p>
            <strong>Adrian Mohani</strong> Like Your Comment On Video
          </p>
          <time> 2 hours ago </time>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="notification__item">
        <div className="drop_avatar">
          <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
        <span className="drop_icon">
          <LikeOutlined />
        </span>
        <div className="drop_text">
          <p>
            <strong>Adrian Mohani</strong> Like Your Comment On Video
          </p>
          <time> 2 hours ago </time>
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="notification__item">
        <div className="drop_avatar">
          <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
        <span className="drop_icon">
          <LikeOutlined />
        </span>
        <div className="drop_text">
          <p>
            <strong>Adrian Mohani</strong> Like Your Comment On Video
          </p>
          <time> 2 hours ago </time>
        </div>
      </div>
    ),
  },
  {
    key: "5",
    label: (
      <div className="notification__item">
        <div className="drop_avatar">
          <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
        <span className="drop_icon">
          <LikeOutlined />
        </span>
        <div className="drop_text">
          <p>
            <strong>Adrian Mohani</strong> Like Your Comment On Video
          </p>
          <time> 2 hours ago </time>
        </div>
      </div>
    ),
  },
];

const messageItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="drop_headline">
        <h4>Messages </h4>
        <div className="btn_action">
          <a href="#">
            <SettingOutlined />
          </a>
          <a href="#">
            <CheckSquareOutlined />
          </a>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="header__messages-input">
        <input type="text" className="" placeholder="Search in Messages" />
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="message__item">
        <div className="drop_avatar">
          <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
        </div>
        <div className="message_text">
          <div className="message_heading">
            <strong> Adrian Mohani </strong> <time> 6:43 PM</time>
          </div>
          <p>Thanks for The Answer sit amet</p>
        </div>
      </div>
    ),
  },
];

const Header = () => {
  const [notificationVisible, setNotificationVisible] = useState<
    boolean | undefined
  >(undefined);

  const [messageVisible, setMessageVisible] = useState<boolean | undefined>(
    undefined
  );

  const [accountVisible, setAccountVisible] = useState<boolean | undefined>(
    undefined
  );

  const { drawer, showDrawer } = useDrawer({
    content: <Sidebar />,
  });

  const handleNotificaionVisibleChange = (visibility: any) => {
    setNotificationVisible(visibility);
  };

  const handleMessageVisibleChange = (visibility: any) => {
    setMessageVisible(visibility);
  };

  const handleAccountVisibleChange = (visibility: any) => {
    setAccountVisible(visibility);
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const accountItems: MenuProps["items"] = [
    {
      key: "current-user",
      label: (
        <Link to="/profile">
          <div className="account__drop">
            <div className="account_heading">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
              <h4>Truong Do</h4>
            </div>
          </div>
        </Link>
      ),
    },
    {
      label: (
        <label>
          <p>My Account</p>
        </label>
      ),
      key: "manage-account",
      icon: <SettingOutlined />,
    },
    {
      label: (
        <label>
          <p>Manage Pages</p>
        </label>
      ),
      key: "manage-pages",
      icon: <FlagOutlined />,
    },
    {
      label: (
        <label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Dark Mode</p>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </label>
      ),
      key: "dark-mode",
      icon: <FaRegMoon />,
    },
    {
      label: (
        <label>
          <p>Logout</p>
        </label>
      ),
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <header>
      <div className="mobile">
        <div className="icon" onClick={showDrawer}>
          <MenuOutlined />
        </div>
      </div>
      <Link to="/">
        <div className="logo">
          <Image preview={false} src={logo} width={70} />
        </div>
      </Link>
      <div className="header__search">
        <SearchOutlined className="header__search-icon" />
        <input type="text" placeholder="Basic usage" />
      </div>
      <div className="header__widgets">
        <DropdownComponent
          badge={5}
          items={notificationItems}
          icon={<BellOutlined />}
          visible={notificationVisible}
          onVisibleChange={handleNotificaionVisibleChange}
        />
        <DropdownComponent
          badge={5}
          items={messageItems}
          icon={<MessageOutlined />}
          visible={messageVisible}
          onVisibleChange={handleMessageVisibleChange}
        />
        <DropdownAccount
          items={accountItems}
          visible={accountVisible}
          onVisibleChange={handleAccountVisibleChange}
        />
      </div>

      <div className="search__icon">
        <div className="icon">
          <SearchOutlined />
        </div>
      </div>

      {drawer}
    </header>
  );
};

export default Header;
