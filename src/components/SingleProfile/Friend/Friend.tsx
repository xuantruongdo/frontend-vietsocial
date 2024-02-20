import { Card, Tabs, Tag } from "antd";
import { TabsProps } from "antd/lib";
import AllFriend from "./AllFriend/AllFriend";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <>
        All Friends <Tag color="blue">1234</Tag>
      </>
    ),
    children: <AllFriend />,
  },
  {
    key: "2",
    label: "Recently added",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Family",
    children: "Content of Tab Pane 3",
  },
];

const Friend = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
      <Card>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
  );
};

export default Friend;
