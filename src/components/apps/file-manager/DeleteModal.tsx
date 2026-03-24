import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DeleteModalProps {
  isOpen: boolean;
  itemName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Body>
        <div className="text-center p-3">
          <img
            src="/images/icons/delete-icon.png"
            alt="delete-icon"
            className="img-fluid mb-3"
          />
          <h4 className="text-danger fw-bold">Are You Sure?</h4>
          <p className="text-secondary fs-6">
            You won&#39;t be able to revert this!
          </p>

          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button color="secondary" onClick={onClose}>
              Close
            </Button>
            <Button color="outiline-primary" onClick={onConfirm}>
              Yes, Delete it
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
