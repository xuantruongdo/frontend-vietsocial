import { Avatar, Dropdown } from "antd";
import { MenuProps } from "antd/lib";

interface IProps {
  items: MenuProps["items"];
}

const DropdownAccount = (props: IProps) => {
  const { items } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: 300 }}
    >
      <Avatar size={46} src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" alt="avatar"/>
    </Dropdown>
  );
};

export default DropdownAccount;
