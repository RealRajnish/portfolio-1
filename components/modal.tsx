// components/Modal.tsx
import React, { ReactNode } from "react";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
        showModal ? "visible" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white p-4 rounded-md z-10">{children}</div>
    </div>
  );
};

export default Modal;
