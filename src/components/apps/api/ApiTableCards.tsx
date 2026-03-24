import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { apiKeyData } from "@/data/app/api/apiData";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import CustomDataTable, { Column } from "../../common/CustomDataTable";

interface ApiKey extends Record<string, unknown> {
  id: number;
  name: string;
  parentName: string;
  key: string;
  date: string;
  email: string;
  bg: string;
  avatar: string;
}

interface Props {
  apiKeyList: ApiKey[];
  setApiKeyList: React.Dispatch<React.SetStateAction<ApiKey[]>>;
}
const ApiTableCards: React.FC<Props> = ({ apiKeyList, setApiKeyList }) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [uiState, setUiState] = useState({
    deleteModal: false,
    selectAll: false,
  });
  const headerCheckboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedItems([]);
    setUiState((prev) => ({ ...prev, selectAll: false }));
  }, [apiKeyList]);

  useEffect(() => {
    setUiState((prev) => ({
      ...prev,
      selectAll: selectedItems.length === apiKeyList.length && apiKeyList.length > 0,
    }));
  }, [selectedItems, apiKeyList]);

  const handleConfirmDelete = () => {
    if (selectedItemId !== null) {
      setApiKeyList(prev => prev.filter(item => item.id !== selectedItemId));
      setUiState((prev) => ({ ...prev, deleteModal: false }));
      setSelectedItemId(null);
      setSelectedItems(prev => prev.filter(id => id !== selectedItemId));
    }
  };

  const toggleSelectAll = () => {
    const shouldSelectAll = selectedItems.length !== apiKeyList.length;
    const newSelection = shouldSelectAll ? apiKeyList.map(item => item.id) : [];
    setSelectedItems(newSelection);
    setUiState((prev) => ({ ...prev, selectAll: shouldSelectAll }));
  };

  const toggleItemSelection = (id: number) => {
    setSelectedItems(prev => {
      const newSelection = prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id];

      // Update selectAll based on new selection
      setUiState((prev) => ({
        ...prev,
        selectAll: newSelection.length === apiKeyList.length,
      }));

      return newSelection;
    });
  };

  const isIndeterminate = selectedItems.length > 0 && selectedItems.length < apiKeyList.length;
    useEffect(() => {
      if (headerCheckboxRef.current) {
        headerCheckboxRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate]);

  const columns: Column<ApiKey>[] = [
    {
      key: "checkbox",
      header: (
        <Form.Check
          type="checkbox"
          checked={uiState.selectAll}
          ref={headerCheckboxRef}
          onChange={toggleSelectAll}
        />
      ),
      render: (_data: unknown, item: (typeof apiKeyData)[0]) => (
        <Form.Check
          type="checkbox"
          checked={selectedItems.includes(item.id)}
          onChange={() => toggleItemSelection(item.id)}
        />
      ),
      className: "no-export",
    },
    {
      key: "name",
      header: "Name",
      render: (_data: unknown, item: (typeof apiKeyData)[0]) => (
        <div className="d-flex align-items-center">
          <div className={`h-30 w-30 d-flex-center b-r-50 overflow-hidden ${item.bg} me-2`}>
            <img src={item.avatar} alt="" className="img-fluid" />
          </div>
          {item.name}
        </div>
      ),
    },
    { key: "parentName", header: "Parent Name" },
    { key: "key", header: "API Key" },
    { key: "date", header: "Date" },
    { key: "email", header: "Email" },
    {
      key: "actions",
      header: "Action",
      render: (_data: unknown, item: (typeof apiKeyData)[0]) => (
        <div className="d-flex">
          <Button
            variant="danger"
            className="icon-btn rounded-2"
            onClick={() => {
              setSelectedItemId(item.id);
              setUiState((prev) => ({ ...prev, deleteModal: true }));
            }}
          >
            <IconTrash size={16} />
          </Button>
          <Button variant="success" className="icon-btn rounded-2 ms-2">
            <IconEdit size={16} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Col xs={12}>
        <CustomDataTable
          showTitle={false}
          showDescription={false}
          key={apiKeyList.length}
          columns={columns}
          data={apiKeyList}
          showActions={false}
          tableClassName="w-100 display apikey-data-table table-bottom-border align-middle"
          cardClassName=""
          enableSearch={true}
          enablePagination={true}
          rowKey="id"
        />
      </Col>
      <Modal show={uiState.deleteModal} onHide={() => setUiState((prev) => ({ ...prev, deleteModal: false }))} backdrop="static">
        <Modal.Body className="text-center">
          <img src="/images/icons/delete-icon.png" alt="" className="img-fluid" />
          <h4 className="text-danger">Are You Sure?</h4>
          <p>You won't be able to revert this!</p>
          <Button variant="secondary" onClick={() => setUiState((prev) => ({ ...prev, deleteModal: false }))}>
            Close
          </Button>{" "}
          <Button variant="primary" onClick={handleConfirmDelete}>
            Yes, Delete it
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ApiTableCards;