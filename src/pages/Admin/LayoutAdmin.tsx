import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import {
  Layout,
  Menu,
  Button,
  theme,
  Dropdown,
  Space,
  Avatar,
  MenuProps,
  Image,
  message,
  notification,
} from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import { BASE_URL } from "../../constants/constants";
import { MdDashboard } from "react-icons/md";
import { callLogout } from "../../api/api";
import { doLogoutAction } from "../../redux/account/accountSlice";

const { Header, Sider, Content } = Layout;

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentUser = useSelector((state: any) => state.account.user);
  const handleLogout = async () => {
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

  let items: MenuProps["items"] = [
    {
      label: <p onClick={handleLogout}>Logout</p>,
      key: "1",
    },
  ];

  if (currentUser?.role === "ADMIN") {
    items.unshift({
      label: <Link to="/admin">Trang quản trị</Link>,
      key: "admin",
    });
  }

  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Link to="/">
          <Image
            preview={false}
            src={logo}
            width={70}
            style={{ padding: 10, marginLeft: 15 }}
          />
        </Link>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <MdDashboard />,
              label: "Dashboard",
              onClick: () => navigate("/admin"),
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "User",
              onClick: () => navigate("/admin/user"),
            },
            {
              key: "3",
              icon: <VideoCameraOutlined />,
              label: "Post",
              onClick: () => navigate("/admin/post"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: "0 20px", background: colorBgContainer }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar src={`${BASE_URL}/images/${currentUser?.avatar}`} />
                  {currentUser?.fullname}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "100px 16px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
