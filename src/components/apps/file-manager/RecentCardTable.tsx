import { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";

import {
  FileItem,
  RecentFilesData,
} from "@/data/app/filemanager/Filemanager.ts";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";

const RecentCardTable = () => {
  const [files, setFiles] = useState<FileItem[]>(RecentFilesData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState("");

  const handleDelete = (id: number) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const startEditing = (id: number, currentName: string) => {
    setEditingId(id);
    setEditedName(currentName);
  };

  const handleEdit = (id: number) => {
    if (!editedName.trim()) return;

    setFiles(
      files.map((file) =>
        file.id === id ? { ...file, name: editedName } : file
      )
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="table-responsive">
      <Table
        id="recentdatatable"
        className="table table-bottom-border recent-table align-middle table-hover mb-0"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Items</th>
            <th>Size</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img src={item.icon} className="w-20 h-20" alt="file-icon" />
                  {editingId === item.id ? (
                    <div className="ms-2 d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control form-control-sm me-2"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                      <button
                        className="btn btn-sm btn-success me-1"
                        onClick={() => handleEdit(item.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <span className="ms-2 table-text">{item.name}</span>
                  )}
                </div>
              </td>
              <td className="text-success f-w-500">{item.totalItems}</td>
              <td>{item.size}</td>
              <td className="text-danger f-w-500">{item.lastModified}</td>
              <td>
                <Dropdown className="dropdown-icon-none folder-dropdown">
                  <Dropdown.Toggle
                    variant="link"
                    size="sm"
                    className="p-0"
                    id="dropdown-actions"
                  >
                    <IconDotsVertical size={18} className="text-primary" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      as="button"
                      className="text-dark view-item-btn"
                      onClick={() => startEditing(item.id, item.name)}
                    >
                      <IconEdit size={18} className="text-success me-2" />
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      className="text-dark view-item-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      <IconTrash size={18} className="text-danger me-2" />
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecentCardTable;
