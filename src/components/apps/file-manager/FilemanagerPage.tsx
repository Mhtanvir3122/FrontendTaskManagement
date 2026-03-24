import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import CloudTabData from "@/components/apps/file-manager/CloudTabData.tsx";
import DeletedTabData from "@/components/apps/file-manager/DeletedTabData.tsx";
import FileManagerSidebar from "@/components/apps/file-manager/FileManagerSidebar.tsx";
import StarredTabData from "@/components/apps/file-manager/StarredTabData.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

type ItemType = {
  title: string;
  type: "file" | "folder";
  image?: string;
  icon?: string;
  used?: string;
  total?: string;
  starred?: boolean;
};

const FileManagerPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  const [deletedFiles, setDeletedFiles] = useState<
    {
      title: string;
      type: "file" | "folder";
      image?: string;
      icon?: string;
      used?: string;
      total?: string;
    }[]
  >([]);

  const handleDelete = (item: {
    title: string;
    type: "file" | "folder";
    image?: string;
    icon?: string;
    used?: string;
    total?: string;
  }) => {
    setDeletedFiles((prev) => [...prev, item]);
  };
  const [starredItems, setStarredItems] = useState<ItemType[]>([]);

  const handleStar = (item: ItemType, isStarred: boolean) => {
    if (isStarred) {
      setStarredItems((prev) => {
        if (!prev.some((i) => i.title === item.title)) {
          return [...prev, item];
        }
        return prev;
      });
    } else {
      setStarredItems((prev) => prev.filter((i) => i.title !== item.title));
    }
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="File Manager"
        title="Apps"
        path={["File Manager"]}
        Icon={StackIcon}
      />
      <Row>
        <Col lg={4} xxl={3}>
          <FileManagerSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Col>
        <Col lg={8} xxl={9}>
          <div className="content-wrapper">
            {/* Tab 1 - Cloud */}
            <div
              id="tab-1"
              className={`tabs-content ${activeTab === "1" ? "active" : ""}`}
            >
              <CloudTabData onDelete={handleDelete} onStar={handleStar} />
            </div>

            {/* Tab 2 - Starred */}
            <div
              id="tab-2"
              className={`tabs-content ${activeTab === "2" ? "active" : ""}`}
            >
              <Card className="documents-section">
                <Card.Header>
                  <h5>Starred Documents & Files</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <StarredTabData starredItems={starredItems} />
                  </Row>
                </Card.Body>
              </Card>
            </div>

            {/* Tab 3 - Deleted */}
            <div
              id="tab-3"
              className={`tabs-content ${activeTab === "3" ? "active" : ""}`}
            >
              <Card className="deleted-file documents-sections">
                <Card.Header>
                  <h5>Deleted Files</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <DeletedTabData deletedFiles={deletedFiles} />
                  </Row>
                </Card.Body>
              </Card>
            </div>

            {/* Tab 4 - Recent */}
            <div
              id="tab-4"
              className={`tabs-content ${activeTab === "4" ? "active" : ""}`}
            >
              <Card>
                <Card.Header>
                  <h5>Recent Added</h5>
                </Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileManagerPage;
