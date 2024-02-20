import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Avatar, Flex, Image, Space, Switch } from "antd";
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
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "15px 3px 10px", color: "#666" }}
      >
        <h4 style={{ fontSize: 20 }}>Notifications </h4>
        <Space>
          <SettingOutlined style={{ fontSize: 20 }} />
          <CheckSquareOutlined style={{ fontSize: 20 }} />
        </Space>
      </Flex>
    ),
  },
  {
    key: "2",
    label: (
      <Flex align="center" gap={10} className="notification__item">
        <div className="drop_avatar">
          <Avatar
            size={50}
            src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
            alt="avatar"
          />
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
      </Flex>
    ),
  },
];

const messageItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Flex
        align="center"
        justify="space-between"
        style={{ padding: "15px 3px 10px", color: "#666" }}
      >
        <h4 style={{ fontSize: 20 }}>Messages </h4>
        <Space>
          <SettingOutlined style={{ fontSize: 20 }} />
          <CheckSquareOutlined style={{ fontSize: 20 }} />
        </Space>
      </Flex>
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
      <Flex align="center" justify="space-between">
        <Space>
          <Avatar
            size={44}
            src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
            alt="avatar"
          />
          <div>
          <h4>Adrian Mohani</h4>
          <p>Thanks for The Answer sit amet</p>
          </div>
        </Space>
        <time> 6:43 PM</time>
      </Flex>
    ),
  },
];

const Header = () => {
  const { drawer, showDrawer } = useDrawer({
    title: (
      <Flex align="center" gap={10}>
        <img src={logo} style={{ width: "50px" }} />
        <p>VIET SOCIAL</p>
      </Flex>
    ),
    content: <Sidebar />,
  });

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
        />
        <DropdownComponent
          badge={5}
          items={messageItems}
          icon={<MessageOutlined />}
        />
        <DropdownAccount items={accountItems} />
      </div>

      {drawer}
    </header>
  );
};

export default Header;
