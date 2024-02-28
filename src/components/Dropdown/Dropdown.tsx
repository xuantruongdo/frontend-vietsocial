import { ReactNode } from "react";
import { Badge, Dropdown, MenuProps } from "antd";

interface IProps {
  items: MenuProps["items"];
  icon: ReactNode;
  badge?: ReactNode;
  type?: string;
}

const DropdownComponent = (props: IProps) => {
  const { items, icon, badge, type } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: type === "postAction" ? "max-content" : 300 }}
      placement="bottomRight"
    >
      <Badge count={badge}>
        <div className="icon">{icon}</div>
      </Badge>
    </Dropdown>
  );
};

export default DropdownComponent;
