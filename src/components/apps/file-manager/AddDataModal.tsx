import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type ItemType = {
  title: string;
  type: "file" | "folder";
  image?: string;
  starred?: boolean;
};

interface AddDataModalProps {
  show: boolean;
  type: "file" | "folder";
  onAdd: (item: ItemType) => void;
  onClose: () => void;
}

const AddDataModal: React.FC<AddDataModalProps> = ({
  show,
  type,
  onAdd,
  onClose,
}) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const reset = () => {
    setTitle("");
    setFile(null);
  };

  const handleConfirm = () => {
    if (!title.trim()) return;

    const newItem: ItemType = {
      title: title.trim(),
      type,
      starred: false,
      ...(type === "file" && {
        image: file ? URL.createObjectURL(file) : "",
      }),
    };

    onAdd(newItem);
    reset();
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add {type === "file" ? "File" : "Folder"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="app-form">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          {type === "file" && (
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files?.length) setFile(e.target.files[0]);
                }}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDataModal;
