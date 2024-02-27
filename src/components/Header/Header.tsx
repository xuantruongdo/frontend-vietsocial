import "./Header.scss";
import logo from "../../assets/images/logo.png";
import {
  Avatar,
  Button,
  Flex,
  Form,
  Image,
  Input,
  Space,
  message,
  notification,
} from "antd";
import {
  BellOutlined,
  LikeOutlined,
  CommentOutlined,
  LogoutOutlined,
  MenuOutlined,
  MessageOutlined,
  SearchOutlined,
  SettingOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { FaRss } from "react-icons/fa";
import DropdownComponent from "../Dropdown/Dropdown";
import DropdownAccount from "../Dropdown/DropdownAccount";
import useDrawer from "../../hooks/useDrawer";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/constants";
import { callChangePassword, callLogout } from "../../api/api";
import { doLogoutAction } from "../../redux/account/accountSlice";
import useSocket from "../../hooks/useSocket";
import { useEffect, useState } from "react";
import { useHasMounted } from "../../hooks/useHasMounted";
import moment from "moment";
import { MdOutlinePassword } from "react-icons/md";
import useModal from "../../hooks/useModal";

type FieldType = {
  currentPassword?: string;
  newPassword?: string;
  confirmationPassword?: string;
};
const Header = () => {
  const currentUser = useSelector((state: any) => state.account.user);
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useSocket();
  const hasMounted = useHasMounted();
  const [form] = Form.useForm();

  const { drawer, showDrawer } = useDrawer({
    title: (
      <Flex align="center" gap={10}>
        <img src={logo} style={{ width: "50px" }} />
        <p>VIET SOCIAL</p>
      </Flex>
    ),
    content: <Sidebar />,
    placement: "left",
  });

  const onFinish = async (values: any) => {
    const { currentPassword, newPassword, confirmationPassword } = values;
    if (newPassword !== confirmationPassword) {
      return notification.error({
        message: "An error occurred",
        description: "Confirmation password does not match",
        duration: 5,
      });
    }

    const data = { currentPassword, newPassword };

    const res = await callChangePassword(data);
    if (res && res.data) {
      handleCancel();
      message.success("Password changed successfully");
      form.resetFields();
    } else {
      notification.error({
        message: "An error occurred",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  useEffect(() => {
    const handleNotification = (notification: any) => {
      if (!hasMounted) return;
      setNotifications((prev: any) => [notification, ...prev]);
    };

    socket?.on(`noti_${currentUser?._id}`, handleNotification);

    return () => {
      socket?.off(`noti_${currentUser?._id}`, handleNotification);
    };
  }, [socket, currentUser]);

  const { modal, showModal, handleCancel } = useModal({
    title: "Change password",
    content: (
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{ remember: true }}
        form={form}
      >
        <Form.Item<FieldType>
          name="currentPassword"
          rules={[
            { required: true, message: "Please input your current password!" },
          ]}
        >
          <Input placeholder="Current password" />
        </Form.Item>

        <Form.Item<FieldType>
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <Input placeholder="New password" />
        </Form.Item>

        <Form.Item<FieldType>
          name="confirmationPassword"
          rules={[
            { required: true, message: "Please input your confirmation password!" },
          ]}
        >
          <Input placeholder="Confirmation password" />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    ),
  });

  const logout = async () => {
    const res = await callLogout();
    if (res && res.data) {
      dispatch(doLogoutAction());
      message.success("Log out successfully");
      navigate("/login");
    } else {
      notification.error({
        message: "An error occurred",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  const viewNotification = () => {
    setNotifications([]);
  };

  const notificationItems = notifications.map((noti, index) => {
    return {
      key: index,
      label: (
        <Flex align="center" gap={10} className="notification__item">
          <div className="drop_avatar">
            <Avatar
              size={50}
              src={`${BASE_URL}/images/${noti?.sender?.avatar}`}
              alt="avatar"
            />
          </div>
          <span className="drop_icon">
            {noti?.type === "like" ? (
              <LikeOutlined />
            ) : noti?.type === "comment" ? (
              <CommentOutlined />
            ) : noti?.type === "follow" ? (
              <FaRss />
            ) : (
              ""
            )}
          </span>
          <div className="drop_text">
            <p>
              <strong>{noti?.sender.fullname}</strong> {noti?.message}
            </p>
            <time> {moment(noti?.createdAt).fromNow()} </time>
          </div>
        </Flex>
      ),
    };
  });

  notificationItems.unshift({
    key: 1000,
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
  });

  notificationItems.push({
    key: 1001,
    label: (
      <div style={{ textAlign: "center" }}>
        <Button onClick={viewNotification}>Viewed</Button>
      </div>
    ),
  });

  const accountItems: MenuProps["items"] = [
    {
      key: "current-user",
      label: (
        <Link to={`/profile/${currentUser?._id}`}>
          <div className="account__drop">
            <div className="account_heading">
              <img
                src={`${BASE_URL}/images/${currentUser?.avatar}`}
                alt="avatar"
              />
              <h4>{currentUser?.fullname}</h4>
            </div>
          </div>
        </Link>
      ),
    },
    {
      label: (
        <Link to={`/setting/${currentUser?._id}`}>
          <label>
            <p>Setting</p>
          </label>
        </Link>
      ),
      key: "manage-account",
      icon: <SettingOutlined />,
    },
    {
      label: (
        <label onClick={showModal}>
          <label>
            <p>Change password</p>
          </label>
        </label>
      ),
      key: "change-password",
      icon: <MdOutlinePassword />,
    },
    {
      label: (
        <label onClick={logout}>
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
        <input type="text" placeholder="Search..." />
      </div>
      {currentUser._id ? (
        <div className="header__widgets">
          <DropdownComponent
            badge={notifications?.length}
            items={notificationItems}
            icon={<BellOutlined />}
          />

          <Link to="/chat" className="icon">
            <MessageOutlined />
          </Link>
          <DropdownAccount items={accountItems} avatar={currentUser?.avatar} />
        </div>
      ) : (
        <Flex gap={20} className="login__action">
          <Link to="/login"> Login</Link>
          <Link to="/register">Register</Link>
        </Flex>
      )}

      {drawer}
      {modal}
    </header>
  );
};

export default Header;
