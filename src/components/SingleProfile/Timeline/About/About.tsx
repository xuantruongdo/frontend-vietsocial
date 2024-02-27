import { HomeOutlined } from "@ant-design/icons";
import { Button, Card, Space } from "antd";
import { FaHeart, FaRss } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface IProps {
  singleUser: IUser;
}
const About = (props: IProps) => {
  const { singleUser } = props;
  const currentUser = useSelector((state: any) => state.account.user);

  return (
    <Card title="About">
      <Space direction="vertical">
        {singleUser?.live && (
          <Space>
            <div className="icon">
              <HomeOutlined />
            </div>
            <span>Live In</span>
            <strong>{singleUser?.live}</strong>
          </Space>
        )}

        {singleUser?.from && (
          <Space>
            <div className="icon">
              <FaLocationDot />
            </div>
            <span>From</span>
            <strong>{singleUser?.from}</strong>
          </Space>
        )}

        {singleUser?.relationship && (
          <Space>
            <div className="icon">
              <FaHeart />
            </div>
            <span>Relationship</span>{" "}
            <strong>{singleUser?.relationship}</strong>
          </Space>
        )}

        <Space>
          <div className="icon">
            <FaRss />
          </div>
          <span>Followed by</span>
          <strong>{singleUser?.followers.length} people</strong>
        </Space>
      </Space>
      {singleUser?._id === currentUser?._id && (
        <Link to={`/setting/${currentUser?._id}`}>
          <Button className="btn" style={{ margin: "10px 0" }}>
            Edit
          </Button>
        </Link>
      )}
    </Card>
  );
};

export default About;
