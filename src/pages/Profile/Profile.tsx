import { Flex } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import SingleProfile from "../../components/SingleProfile/SingleProfile";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callFetchUserById } from "../../api/api";

interface IProps {
  onlineUsers: IUser[];
}
const Profile = (props: IProps) => {
  const { onlineUsers } = props;
  const { slug } = useParams();
  const [singleUser, setSingleUser] = useState<IUser>();

  const fetchUserById = async () => {
    const res = await callFetchUserById(slug!);
    if (res && res.data) {
      setSingleUser(res.data);
    }
  };

  useEffect(() => {
    fetchUserById();
  }, [slug]);

  return (
    <Flex>
      <Sidebar />
      <SingleProfile singleUser={singleUser!} fetchUserById={fetchUserById} onlineUsers={onlineUsers} />
    </Flex>
  );
};

export default Profile;
