import { CameraOutlined } from "@ant-design/icons";
import "./SingleProfile.scss";
import { Divider, Image, Tabs, Tag } from "antd";
import { TabsProps } from "antd/lib";
import Timeline from "./Timeline/Timeline";
import { MdVerified } from "react-icons/md";
import Friend from "./Friend/Friend";
import Photos from "./Photos/Photos";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Timeline",
    children: <Timeline />,
  },
  {
    key: "2",
    label: (
      <>
        Friend <Tag color="blue">1234</Tag>
      </>
    ),
    children: <Friend />,
  },
  {
    key: "3",
    label: "Photos",
    children: <Photos/>,
  },
  {
    key: "4",
    label: "Pages",
    children: "Content of Tab Pane 4",
  },
  {
    key: "5",
    label: "Groups",
    children: "Content of Tab Pane 5",
  },
  {
    key: "6",
    label: "Videos",
    children: "Content of Tab Pane 6",
  },
];

const SingleProfile = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="single__profile ">
      <div className="cover">
        <img
          src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
          alt=""
        />
        <div className="edit__cover">
          <CameraOutlined />
        </div>
      </div>
      <div className="avatar">
        <Image
          src="https://www.inlogo.vn/vnt_upload/File/Image/vsnMeOX.png"
          alt="avatar"
        />
        <div className="user_status status_online"></div>
        <div className="change__avatar--icon">
          <CameraOutlined />
        </div>
      </div>
      <div className="info">
        <h1>
          Cristiano Ronaldo <MdVerified color="#0866FF" />
        </h1>

        <p>
          Family , Food , Fashion , Fourever 
        </p>
      </div>
      <Divider />

      <div style={{ margin: 10 }}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default SingleProfile;
