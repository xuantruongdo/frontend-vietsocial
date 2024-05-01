import "./SingleProfile.scss";
import {
  Button,
  Divider,
  Flex,
  Image,
  Spin,
  Tabs,
  Tag,
  Upload,
  message,
  notification,
} from "antd";
import { TabsProps } from "antd/lib";
import Timeline from "./Timeline/Timeline";
import { MdVerified } from "react-icons/md";
import { BASE_URL } from "../../constants/constants";
import { FaCamera } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  callAccessChat,
  callFollowUser,
  callUpdateUser,
  callUploadSingleFile,
} from "../../api/api";
import { useNavigate } from "react-router-dom";
import { doSelectedChatAction } from "../../redux/chat/chatSlice";
import Following from "./Following/Following";
import useSocket from "../../hooks/useSocket";

interface IProps {
  singleUser: IUser;
  fetchUserById: any;
  onlineUsers: IUser[];
}
const SingleProfile = (props: IProps) => {
  const { singleUser, fetchUserById, onlineUsers } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.account.user);
  const socket = useSocket();

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Timeline",
      children: <Timeline singleUser={singleUser} />,
    },
    {
      key: "2",
      label: (
        <>
          Following <Tag color="blue">{singleUser?.followings.length}</Tag>
        </>
      ),
      children: <Following singleUser={singleUser} />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  const accessChat = async () => {
    if (!singleUser?._id) return;
    const res = await callAccessChat(singleUser?._id);
    if (res && res.data) {
      navigate("/chat");
      dispatch(doSelectedChatAction(res?.data));
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

  const handleFollow = async () => {
    if (!singleUser?._id) return;
    const res = await callFollowUser(singleUser?._id);
    if (res && res.data) {
      fetchUserById();
      if (!singleUser?.followers.includes(currentUser?._id)) {
        socket?.emit("follow", {
          sender: currentUser,
          post: { author: singleUser },
          type: "follow",
          createdAt: new Date(),
        });
      }
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

  const propsUploadAvatar = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    accept: ".png, .jpg, .jpeg",
    async customRequest({ file, onSuccess, onError }: any) {
      const res = await callUploadSingleFile(file);
      if (res && res.data) {
        const data = { avatar: res.data.fileName };
        const resUploadAvatar = await callUpdateUser(singleUser?._id, data);
        if (resUploadAvatar && resUploadAvatar.data) {
          fetchUserById();
        }
        if (onSuccess) onSuccess("ok");
      } else {
        if (onError) {
          const error = new Error(res.message);
          onError({ event: error });
        }
      }
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(
          info?.file?.error?.event?.message ??
            "An error occurred while uploading the file"
        );
      }
    },
  };

  const propsUploadCover = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    accept: ".png, .jpg, .jpeg",
    async customRequest({ file, onSuccess, onError }: any) {
      const res = await callUploadSingleFile(file);
      if (res && res.data) {
        const data = { cover: res.data.fileName };
        const resUploadAvatar = await callUpdateUser(singleUser?._id, data);
        if (resUploadAvatar && resUploadAvatar.data) {
          fetchUserById();
        }
        if (onSuccess) onSuccess("ok");
      } else {
        if (onError) {
          const error = new Error(res.message);
          onError({ event: error });
        }
      }
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(
          info?.file?.error?.event?.message ??
            "An error occurred while uploading the file"
        );
      }
    },
  };

  return (
    <div className="single__profile ">
      <Spin
        spinning={!singleUser}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      >
        <div className="cover">
          <img src={`${BASE_URL}/images/${singleUser?.cover}`} alt="" />
          <div className="edit__cover">
            {singleUser?._id === currentUser?._id && (
              <Upload {...propsUploadCover}>
                <div className="icon">
                  <FaCamera color="black" />
                </div>
              </Upload>
            )}
          </div>
        </div>
        <div className="avatar">
          <Image
            src={`${BASE_URL}/images/${singleUser?.avatar}`}
            alt="avatar"
          />
          {onlineUsers?.some(
            (user) =>
              user?._id === singleUser?._id && (
                <div className="user_status status_online"></div>
              )
          )}
          {singleUser?._id === currentUser?._id && (
            <Upload {...propsUploadAvatar}>
              <div className="change__avatar--icon">
                <FaCamera color="black" />
              </div>
            </Upload>
          )}
        </div>
        <div className="info">
          <h1>
            {singleUser?.fullname}
            {singleUser?.isVerify && <MdVerified color="#0866FF" />}
          </h1>

          <p>{singleUser?.note}</p>

          {currentUser?._id !== singleUser?._id && (
            <Flex gap={10} style={{ marginTop: 10 }}>
              <Button onClick={accessChat}>Message</Button>
              <Button type="primary" onClick={handleFollow}>
                {singleUser?.followers.includes(currentUser?._id)
                  ? "UnFollow"
                  : "Follow"}
              </Button>
            </Flex>
          )}
        </div>
        <Divider />

        <div style={{ margin: 10 }}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Spin>
    </div>
  );
};

export default SingleProfile;
