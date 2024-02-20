import "../Login/Login.scss";
import { Button, Card, Col, Divider, Form, Input, Row } from "antd";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

type FieldType = {
  fullname?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
};

const Register = () => {
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
                name="fullname"
                rules={[
                  { required: true, message: "Please input your fullname!" },
                ]}
              >
                <Input style={{ padding: 10 }} placeholder="Fullname" />
              </Form.Item>
              <Form.Item<FieldType>
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
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
                  placeholder="Confim password"
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="confirm_password"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
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
                  Sign up
                </Button>
              </Form.Item>

              <Divider />

              <div className="center__wrapper">
                <Link to="/login">
                  <Button className="sub__button">Login with account</Button>
                </Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
