import { Modal, Typography } from "antd";
import { useState } from "react";

interface IProps {
  title?: string;
  content: any;
}

const useModal = ({ title, content }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const modal = (
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
      <Typography
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "#333",
          paddingBottom: "20px",
        }}
      >
        {title}
      </Typography>
      {content}
    </Modal>
  );
  return { modal, open, handleCancel, showModal };
};

export default useModal;
