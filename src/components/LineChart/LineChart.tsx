import { Card } from "antd";
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
    <Card title="Statistics" style={{ marginTop: 50, textAlign: "center" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sl" stroke="#8884d8" />
        </LineChart>
      </div>
    </Card>
  );
};

export default LineChartExample;
