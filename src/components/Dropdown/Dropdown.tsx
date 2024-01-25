import { ReactNode } from "react";
import { Badge, Dropdown, MenuProps } from "antd";

interface IProps {
  items: MenuProps["items"];
  icon: ReactNode;
  visible: boolean | undefined;
  onVisibleChange: (visible: boolean) => void;
  badge?: ReactNode;
}

const DropdownComponent = (props: IProps) => {
  const { items, icon, visible, onVisibleChange, badge } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: badge ? 400 : 200 }}
      visible={visible}
      onVisibleChange={onVisibleChange}
      placement="bottomRight"
    >
      <Badge count={badge}>
        <div className="icon">{icon}</div>
      </Badge>
    </Dropdown>
  );
};

export default DropdownComponent;
