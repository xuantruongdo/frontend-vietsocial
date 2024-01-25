import { Avatar, Space } from "antd";

const UserInfoComment = () => {
  return (
    <Space>
      <Avatar
        size={40}
        src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
      />
      <Space direction="vertical" style={{ rowGap: 0 }}>
        <h4>Truong Do</h4>
        <p>a day ago</p>
      </Space>
    </Space>
  );
};

export default UserInfoComment;
