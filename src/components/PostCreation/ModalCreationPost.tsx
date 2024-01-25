import { Form, Input, Space } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { FaFaceLaugh, FaLocationDot } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";

const ModalCreationPost = () => {
  return (
    <Form name="basic" initialValues={{ remember: true }} autoComplete="off">
      <Form.Item name="content">
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <img
              src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
              alt=""
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
          <Input.TextArea placeholder="What's on your mind ?" />
        </div>
      </Form.Item>
      <Form.Item>
        <div className="file__wrapper">
          <p>Add to your post</p>
          <Space>
            <div className="icon photo">
              <MdInsertPhoto style={{ fontSize: 24 }} />
            </div>
            <div className="icon tag">
              <FaUserPlus style={{ fontSize: 24 }} />
            </div>
            <div className="icon feeling">
              <FaFaceLaugh style={{ fontSize: 24 }} />
            </div>
            <div className="icon location">
              <FaLocationDot style={{ fontSize: 24 }} />
            </div>
          </Space>
        </div>
      </Form.Item>
    </Form>
  );
};

export default ModalCreationPost;
