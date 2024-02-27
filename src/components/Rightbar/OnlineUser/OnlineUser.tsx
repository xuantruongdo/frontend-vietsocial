import "./OnlineUser.scss";
import { Avatar, Space, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callAccessChat } from "../../../api/api";
import { doSelectedChatAction } from "../../../redux/chat/chatSlice";
import { BASE_URL } from "../../../constants/constants";

interface IProps {
  onlineUsers: IUser[];
}
const OnlineUser = (props: IProps) => {
  const { onlineUsers } = props;
  const currentUser = useSelector((state: any) => state.account.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessChat = async (id: string) => {
    const res = await callAccessChat(id);
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

  return (
    <>
      {onlineUsers?.map((user: any) => {
        if (user?._id !== currentUser?._id)
          return (
            <Space
              direction="vertical"
              key={user?._id}
              onClick={() => accessChat(user?._id)}
            >
              <Space style={{ cursor: "pointer", marginTop: 10 }}>
                <div className="contact__avatar">
                  <Avatar src={`${BASE_URL}/images/${user?.avatar}`} />
                  <span className="user_status status_online"></span>
                </div>
                <div className="contact__username"> {user?.fullname}</div>
              </Space>
            </Space>
          );
      })}
    </>
  );
};

export default OnlineUser;
