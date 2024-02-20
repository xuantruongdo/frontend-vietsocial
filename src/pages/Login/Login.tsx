import "./Login.scss";
import { Button, Card, Col, Divider, Form, Input, Row } from "antd";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
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
              // onFinish={onFinish}
              autoComplete="off"
              // style={{ margin: "0 50px", textAlign: "center" }}
            >
              <Form.Item<FieldType>
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={{ padding: 10 }} placeholder="Email" />
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
                  style={{ width: "100%" }}
                >
                  Login
                </Button>
              </Form.Item>

              <div className="center__wrapper">
                <Link to="#">Forgot password ?</Link>
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
