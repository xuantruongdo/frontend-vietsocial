import { Avatar, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { BASE_URL } from "../../constants/constants";

interface IProps {
  items: MenuProps["items"];
  avatar: string;
}

const DropdownAccount = (props: IProps) => {
  const { items, avatar } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: 300 }}
    >
      <Avatar size={46} src={`${BASE_URL}/images/${avatar}`} alt="avatar"/>
    </Dropdown>
  );
};

export default DropdownAccount;
