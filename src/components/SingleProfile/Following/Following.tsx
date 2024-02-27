import { Col, Image, Row } from "antd";
import { useEffect, useState } from "react";
import { callFetchFollowingUsers } from "../../../api/api";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/constants";

interface IProps {
  singleUser: IUser;
}
const Following = (props: IProps) => {
  const { singleUser } = props;
  const [followingUsers, setFollowingUsers] = useState([]);

  const fetchFollowingUser = async () => {
    if (!singleUser?._id) return;
    const res = await callFetchFollowingUsers(singleUser?._id);
    if (res && res.data) {
      setFollowingUsers(res.data.followings);
    }
  };

  useEffect(() => {
    fetchFollowingUser();
  }, [singleUser?._id]);

  return (
    <Row gutter={[8, 8]}>
        {followingUsers?.map((user: any) => (
          <Link to={`/profile/${user?._id}`} key={user?._id}>
            <Col>
              <Image
                src={`${BASE_URL}/images/${user?.avatar}`}
                alt="image"
                preview={false}
                style={{
                  borderRadius: 10,
                  height: 130,
                  width: 130,
                  objectFit: "cover",
                }}
              />
              <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
                {user?.fullname}
              </h4>
            </Col>
          </Link>
        ))}

    </Row>
  );
};

export default Following;
