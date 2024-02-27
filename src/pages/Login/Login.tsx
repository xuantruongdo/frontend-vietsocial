import "./Login.scss";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  message,
  notification,
} from "antd";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { callLogin } from "../../api/api";
import { doLoginAction } from "../../redux/account/accountSlice";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onFinish = async (values: FieldType) => {
    const { email, password } = values;

    setLoading(true);

    const res = await callLogin({ username: email!, password: password! });

    setLoading(false);

    if (res && res?.data) {
      localStorage.setItem("access_token", res.data.access_token);
      dispatch(doLoginAction(res.data.user));
      message.success("Logged in successfully");
      window.location.href = "/";
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
    <div className="login__wrapper">
      <Row gutter={[16, 16]} className="login">
        <Col xs={24} md={12} className="left">
          <img src={logo} alt="" />
          <p>Connect with friends and the world around you on Socialite.</p>
        </Col>

        <Col xs={24} md={12}>
          <Card>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              // style={{ margin: "0 50px", textAlign: "center" }}
            >
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" style={{ padding: 10 }} placeholder="Email" />
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  style={{ padding: 10 }}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form.Item>

              <div className="center__wrapper">
                <Link to="/forget">Forgot password ?</Link>
              </div>

              <Divider />

              <div className="center__wrapper">
                <Link to="/register">
                  <Button className="sub__button">Create New Account</Button>
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
