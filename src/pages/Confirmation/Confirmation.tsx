import { Button, Card, Form, Input, message, notification } from "antd";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  callActive,
} from "../../api/api";

type FieldType = {
  confirmationCode?: string;
};

const Confirmation = () => {
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");

  const onFinish = async (values: FieldType) => {
    const { confirmationCode } = values;
    const data = {
      email,
      confirmationCode,
    };
      const res = await callActive(data);
      console.log(res);
    if (res && res.data) {
      message.success("Account authentication successful");
      navigate("/login");
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
    <div className="forget__password">
      <div className="heading">
        <img src={logo} alt="" />
        <p>Active account.</p>
      </div>

      <Card className="card">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="confirmationCode"
            rules={[
              {
                required: true,
                message: "Please input your confirmationCode!",
              },
            ]}
          >
            <Input style={{ padding: 10 }} placeholder="Confirmation code" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Confirmation;
