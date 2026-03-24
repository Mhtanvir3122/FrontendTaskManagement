import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import {
  fileData as initialFileData,
  foldersData as initialFoldersData,
} from "@/data/app/filemanager/Filemanager";

import AddDataModal from "@/components/apps/file-manager/AddDataModal.tsx";
import DeleteModal from "@/components/apps/file-manager/DeleteModal.tsx";
import FileCommonCard from "@/components/apps/file-manager/FileCommonCard.tsx";
import FolderCommonCard from "@/components/apps/file-manager/FolderCommonCard.tsx";
import RecentCardTable from "@/components/apps/file-manager/RecentCardTable.tsx";

import RenameModal from "./RenameModal";

type ItemType = {
  title: string;
  type: "file" | "folder";
  image?: string;
  icon?: string;
  used?: string;
  total?: string;
  starred?: boolean;
};

type Props = {
  onDelete: (item: ItemType) => void;
  onStar: (item: ItemType, isStarred: boolean) => void;
};

const CloudTabData = ({ onDelete, onStar }: Props) => {
  const [fileData, setFileData] = useState(
    initialFileData.map((f) => ({ ...f, starred: false }))
  );
  const [foldersData, setFoldersData] = useState(
    initialFoldersData.map((f) => ({ ...f, starred: false }))
  );

  const [uiState, setUiState] = useState({
    showAddModal: false,
    renameModalOpen: false,
    deleteModalOpen: false,
  });

  const [addType, setAddType] = useState<"file" | "folder">("file");
  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);

  const [onRenameConfirm, setOnRenameConfirm] = useState<
    (name: string) => void
  >(() => {});
  const [onDeleteConfirm, setOnDeleteConfirm] = useState<() => void>(() => {});

  const openRenameModal = (item: ItemType) => {
    setCurrentItem(item);

    setOnRenameConfirm(() => (newName: string) => {
      const trimmedName = newName.trim();
      if (!trimmedName) return;

      if (item.type === "file") {
        setFileData((prev) =>
          prev.map((f) =>
            f.title === item.title ? { ...f, title: trimmedName } : f
          )
        );
      } else {
        setFoldersData((prev) =>
          prev.map((f) =>
            f.title === item.title ? { ...f, title: trimmedName } : f
          )
        );
      }
    });

    setUiState((prev) => ({ ...prev, renameModalOpen: true }));
  };

  const openDeleteModal = (item: ItemType) => {
    setCurrentItem(item);

    setOnDeleteConfirm(() => () => {
      if (item.type === "file") {
        setFileData((prev) => prev.filter((f) => f.title !== item.title));
      } else {
        setFoldersData((prev) => prev.filter((f) => f.title !== item.title));
      }

      onDelete(item);
    });

    setUiState((prev) => ({ ...prev, deleteModalOpen: true }));
  };

  const handleStar = (item: ItemType, isStarred: boolean) => {
    if (item.type === "file") {
      setFileData((prev) =>
        prev.map((f) =>
          f.title === item.title ? { ...f, starred: isStarred } : f
        )
      );
    } else {
      setFoldersData((prev) =>
        prev.map((f) =>
          f.title === item.title ? { ...f, starred: isStarred } : f
        )
      );
    }
    onStar(item, isStarred);
  };

  const handleAddItem = (item: ItemType) => {
    if (item.type === "file") {
      setFileData((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: item.title,
          image: item.image || "",
          starred: item.starred ?? false,
        },
      ]);
    } else {
      setFoldersData((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: item.title,
          type: item.type,
          icon: item.icon || "/images/icons/file-manager-icon/folder.png",
          used: item.used || "",
          total: item.total || "",
          starred: item.starred ?? false,
        },
      ]);
    }
  };

  return (
    <>
      {/* Quick Access */}
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <h5>Quick-Access</h5>
          <Button
            onClick={() => {
              setAddType("file");
              setUiState((prev) => ({ ...prev, showAddModal: true }));
            }}
          >
            Add Files
          </Button>
        </Card.Header>
        <Card.Body>
          <Row>
            {fileData.map((file, index) => (
              <Col key={index} sm="6" xl="4" xxl="3">
                <FileCommonCard
                  title={file.title}
                  image={file.image}
                  starred={file.starred}
                  onStar={(starred) =>
                    handleStar({ ...file, type: "file" }, starred)
                  }
                  onRename={() => openRenameModal({ ...file, type: "file" })}
                  onDelete={() => openDeleteModal({ ...file, type: "file" })}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Folders */}
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <h5>Folders</h5>
          <Button
            onClick={() => {
              setAddType("folder");
              setUiState((prev) => ({ ...prev, showAddModal: true }));
            }}
          >
            Add Folder
          </Button>
        </Card.Header>
        <Card.Body>
          <Row>
            {foldersData.map((folder, index) => (
              <Col key={index} sm="6" xl="4" xxl="3">
                <FolderCommonCard
                  {...folder}
                  onStar={(starred) =>
                    handleStar({ ...folder, type: "folder" }, starred)
                  }
                  onRename={() =>
                    openRenameModal({ ...folder, type: "folder" })
                  }
                  onDelete={() =>
                    openDeleteModal({ ...folder, type: "folder" })
                  }
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Recent Added */}
      <Card>
        <Card.Header>
          <h5>Recent Added</h5>
        </Card.Header>
        <Card.Body className="p-0">
          <RecentCardTable />
        </Card.Body>
        <Card.Footer className="card-footer">
          <div className="seller-table-footer d-flex justify-content-between align-items-center">
            <p className="text-secondary text-truncate">
              Showing 1 to 6 of 24 order entries
            </p>
            <ul className="pagination app-pagination">
              <li className="page-item bg-light-secondary disabled">
                <a className="page-link b-r-left">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link">1</a>
              </li>
              <li className="page-item active">
                <a className="page-link">2</a>
              </li>
              <li className="page-item">
                <a className="page-link">3</a>
              </li>
              <li className="page-item">
                <a className="page-link">Next</a>
              </li>
            </ul>
          </div>
        </Card.Footer>
      </Card>

      <AddDataModal
        show={uiState.showAddModal}
        type={addType}
        onClose={() => setUiState((prev) => ({ ...prev, showAddModal: false }))}
        onAdd={handleAddItem}
      />

      {/* Modals */}
      <RenameModal
        isOpen={uiState.renameModalOpen}
        currentName={currentItem?.title || ""}
        onClose={() => setUiState((prev) => ({ ...prev, renameModalOpen: false }))}
        onConfirm={(newName) => {
          onRenameConfirm(newName);
          setUiState((prev) => ({ ...prev, renameModalOpen: false }));
        }}
      />

      <DeleteModal
        isOpen={uiState.deleteModalOpen}
        itemName={currentItem?.title || ""}
        onClose={() => setUiState((prev) => ({ ...prev, deleteModalOpen: false }))}
        onConfirm={() => {
          onDeleteConfirm();
          setUiState((prev) => ({ ...prev, deleteModalOpen: false }));
        }}
      />
    </>
  );
};

export default CloudTabData;
