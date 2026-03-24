import React, { useState } from "react";
import { Button, Dropdown, FormControl, InputGroup } from "react-bootstrap";

import {
  IconAlbum,
  IconAlignJustified,
  IconDotsVertical,
  IconSearch,
  IconTag,
  IconUsers,
} from "@tabler/icons-react";

interface EmailToolbarProps {
  onToggleSidebar?: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const EmailToolbar: React.FC<EmailToolbarProps> = ({
  onToggleSidebar,
  searchTerm,
  onSearchChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="d-flex align-items-center mb-3">
      <div className="d-lg-none me-3">
        <Button
          variant="link"
          className="p-0 toggle-btn text-primary"
          onClick={onToggleSidebar}
        >
          <IconAlignJustified size={20} />
        </Button>
      </div>

      <div className="app-form flex-grow-1">
        <InputGroup className="b-r-search">
          <InputGroup.Text className="bg-primary border-0 text-white">
            <IconSearch size={16} />
          </InputGroup.Text>
          <FormControl
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </InputGroup>
      </div>

      <div className="ms-2">
        <Dropdown
          className="dropdown-icon-none"
          show={showDropdown}
          onToggle={() => setShowDropdown(!showDropdown)}
          align="end"
        >
          <Dropdown.Toggle as="a" className="icon-btn p-2" role="button">
            <IconDotsVertical size={20} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">
              <IconAlbum size={16} className="me-2" />
              Primary
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <IconTag size={16} className="me-2" />
              Promotions
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <IconUsers size={16} className="me-2" />
              Social
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default EmailToolbar;
