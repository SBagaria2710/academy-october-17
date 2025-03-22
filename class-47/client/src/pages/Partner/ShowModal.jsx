import { Modal } from "antd";
import React from "react";

const ShowModal = ({
  selectedTheatre,
  isShowModalOpen,
  setIsShowModalOpen,
}) => {
  return (
    <Modal
      title="Show Modal"
      open={isShowModalOpen}
      onCancel={() => setIsShowModalOpen(false)}
    >
      <p className="pt-3 fs-18">Show Modal Content</p>
    </Modal>
  );
};

export default ShowModal;
