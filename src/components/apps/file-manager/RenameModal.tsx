import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface RenameModalProps {
  isOpen: boolean;
  currentName: string;
  onClose: () => void;
  onConfirm: (newName: string) => void;
}

const RenameModal: React.FC<RenameModalProps> = ({
  isOpen,
  currentName,
  onClose,
  onConfirm,
}) => {
  const [newName, setNewName] = useState(currentName);

  useEffect(() => {
    setNewName(currentName);
  }, [currentName]);

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>Rename</Modal.Header>
      <Modal.Body>
        <Form className="app-form">
          <Form.Control
            type="text"
            value={newName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewName(e.target.value)
            }
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => onConfirm(newName)}>
          Rename
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RenameModal;
