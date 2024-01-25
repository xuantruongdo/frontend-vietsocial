import { Drawer } from "antd";
import { useState } from "react";

interface IProps {
  title?: string;
  content: any;
}

const useDrawer = ({ title, content }: IProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCancel = () => {
    setIsDrawerOpen(false);
  };
  const drawer = (
    <Drawer title={title} onClose={handleCancel} open={isDrawerOpen} placement="left">
      {content}
    </Drawer>
  );

  return { drawer, isDrawerOpen, handleCancel, showDrawer };
};

export default useDrawer;
