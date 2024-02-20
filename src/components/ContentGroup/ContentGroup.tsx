import {
  AntDesignOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./ContentGroup.scss";
import { Avatar, Button, Flex, Space, Tooltip } from "antd";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import TimelineGroup from "./TimelineGroup/TimelineGroup";

const items: TabsProps["items"] = [
  {
    key: "home-group",
    label: "Home",
    children: <TimelineGroup />,
  },
  {
    key: "about-group",
    label: "About",
    children: "Content of Tab Pane 2",
  },
  {
    key: "photos-group",
    label: "Photos",
    children: "Content of Tab Pane 3",
  },
];

const ContentGroup = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="group">
      <div className="heading">
        <div className="banner">
          <img
            alt="banner"
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          />
        </div>
        <Flex
          align="center"
          justify="space-between"
          className="title"
          style={{ flexWrap: "wrap" }}
        >
          <Space direction="vertical">
            <h1>Friends For Ever</h1>
            <p>Public group · 12k members</p>
          </Space>
          <Space>
            <Avatar.Group
              maxCount={2}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1677ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>

            <Button type="primary">
              <PlusOutlined /> Join
            </Button>
          </Space>
        </Flex>
      </div>
      <div className="tabs">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default ContentGroup;
