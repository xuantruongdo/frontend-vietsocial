import { Col, Row } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import DashboardCard from "../../../components/DashboardCard/DashboardCard";
import LineChartExample from "../../../components/LineChart/LineChart";
import { callFetchCountData } from "../../../api/api";

const Dashboard = () => {
  const [countUser, setCountUser] = useState(0);
  const [countPost, setCountPost] = useState(0);

  const fetchCountData = async () => {
    const res = await callFetchCountData();
    if (res && res.data) {
      setCountUser(res.data.userCount);
      setCountPost(res.data.postCount);
    }
  };

  useEffect(() => {
    fetchCountData();
  }, []);

  let data = [
    { name: "User", sl: countUser },
    { name: "Post", sl: countPost },
  ];

  return (
    <div style={{ height: "90vh" }}>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <DashboardCard
            icon={<UserOutlined style={{ fontSize: 30 }} />}
            title={"Users"}
            value={countUser}
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <DashboardCard
            icon={<VideoCameraOutlined style={{ fontSize: 30 }} />}
            title={"Posts"}
            value={countPost}
          />
        </Col>
      </Row>
      <LineChartExample data={data} />
    </div>
  );
};

export default Dashboard;
