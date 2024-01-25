import { Dropdown } from "antd";
import { MenuProps } from "antd/lib";

interface IProps {
  items: MenuProps["items"];
  visible: boolean | undefined;
  onVisibleChange: (visible: boolean) => void;
}

const DropdownAccount = (props: IProps) => {
  const { items, visible, onVisibleChange } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: 300 }}
    >
      <div className="icon">
        <img src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg" />
      </div>
    </Dropdown>
  );
};

export default DropdownAccount;
