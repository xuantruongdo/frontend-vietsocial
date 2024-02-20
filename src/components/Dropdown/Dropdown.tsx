import { ReactNode } from "react";
import { Badge, Dropdown, MenuProps } from "antd";

interface IProps {
  items: MenuProps["items"];
  icon: ReactNode;
  badge?: ReactNode;
}

const DropdownComponent = (props: IProps) => {
  const { items, icon, badge } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: badge ? 400 : 200 }}
      placement="bottomRight"
    >
      <Badge count={badge}>
        <div className="icon">{icon}</div>
      </Badge>
    </Dropdown>
  );
};

export default DropdownComponent;
