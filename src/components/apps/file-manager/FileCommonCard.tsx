import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";

import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { Star } from "phosphor-react";

interface FileCardProps {
  title: string;
  image: string;
  starred?: boolean;
  onStar?: (starred: boolean) => void;
  onRename?: () => void;
  onDelete?: () => void;
}

const FileCommonCard: React.FC<FileCardProps> = ({
  title,
  image,
  starred = false,
  onStar,
  onRename,
  onDelete,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const showDropdown = onRename || onDelete;

  const toggleStar = () => {
    if (onStar) {
      onStar(!starred);
    }
  };

  return (
    <Card className="quick-access position-relative">
      <Card.Body className="p-3">
        <div
          className="position-absolute top-0 start-0 m-2"
          onClick={toggleStar}
        >
          <Star
            size={18}
            weight={starred ? "fill" : "regular"}
            className="text-warning"
          />
        </div>

        {showDropdown && (
          <div className="position-absolute top-0 end-0 m-2">
            <Dropdown
              className="dropdown-icon-none"
              show={dropdownOpen}
              onToggle={toggleDropdown}
            >
              <Dropdown.Toggle
                as="a"
                role="button"
                className="btn btn-link p-0 text-dark"
              >
                <IconDotsVertical size={18} />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {onRename && (
                  <Dropdown.Item onClick={onRename}>
                    <IconEdit size={16} className="text-success me-2" />
                    Rename
                  </Dropdown.Item>
                )}
                {onDelete && (
                  <Dropdown.Item onClick={onDelete}>
                    <IconTrash size={16} className="text-danger me-2" />
                    Delete
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}

        <div className="text-center my-4">
          <img src={image} alt={title} className="img-fluid w-50" />
        </div>

        <p className="text-center fw-semibold mb-0">{title}</p>
      </Card.Body>
    </Card>
  );
};

export default FileCommonCard;
