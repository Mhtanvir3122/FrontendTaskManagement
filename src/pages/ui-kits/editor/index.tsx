import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import TextEditor from "@/components/editor/TextEditor.tsx";

const EditorPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Editor"
          title="Ui Kits"
          path={["Editor"]}
          Icon={Briefcase}
        />

        <Row className="list-item">
          <Col>
            <Card>
              <div className="card-body">
                <TextEditor />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditorPage;
