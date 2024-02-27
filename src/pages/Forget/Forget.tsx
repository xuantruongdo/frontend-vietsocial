import "./Forget.scss";
import {
  Button,
  Card,
  Form,
  Input,
  message,
  notification,
} from "antd";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  callFetchUserByEmail,
  callGenerateNewPassword,
  callSendEmail,
} from "../../api/api";
import { BASE_URL } from "../../constants/constants";

type FieldType = {
  email?: string;
};

const Forget = () => {
  const [user, setUser] = useState<IUser>();

  const navigate = useNavigate();

  const [loadingConfirmCode, setLoadingConfirmCode] = useState<boolean>(false);

  const sendEmail = async () => {

    const res = await callSendEmail(user?.email!);

    if (res && res?.data) {
      message.success("Code sent successfully! Please check your email");
    }
  };

  const onFinish = async (values: FieldType) => {
    const { email } = values;

    const res = await callFetchUserByEmail(email!);

    if (res && res?.data) {
      setUser(res.data);
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

  const onFinishCode = async (values: any) => {
    const { confirmationCode } = values;

    setLoadingConfirmCode(true);

    const res = await callGenerateNewPassword({
      email: user?.email!,
      confirmationCode: parseInt(confirmationCode),
    });

    setLoadingConfirmCode(false);

    if (res && res?.data) {
      message.success(
        "Authentication successful! New password has been sent to your email"
      );
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
        <p>Forget password.</p>
      </div>

      {!user && (
        <Card className="card">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input style={{ padding: 10 }} placeholder="Email" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Search
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}

      {user?._id && (
        <div className="user__info">
          <img src={`${BASE_URL}/images/${user?.avatar}`} alt="" />
          <p>{user?.fullname}</p>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinishCode}
            autoComplete="off"
          >
            <Form.Item<any>
              name="confirmationCode"
              rules={[
                {
                  required: true,
                  message: "Please input your confirmation code!",
                },
              ]}
            >
              <Input style={{ padding: 10 }} placeholder="Confirmation code" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadingConfirmCode}
                style={{ width: "100%" }}
              >
                Send
              </Button>
            </Form.Item>
          </Form>

          <p className="send__btn" onClick={sendEmail}>
            Get the authentication code
          </p>
        </div>
      )}
    </div>
  );
};

export default Forget;
