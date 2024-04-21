import { Col } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const LineChartExample = (props: any) => {
  const { data } = props;
  return (
    <div style={{ marginTop: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Col xs={0} sm={12} md={18}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sl" stroke="#8884d8" />
      </LineChart>
      </Col>
    </div>
  );
};

export default LineChartExample;
