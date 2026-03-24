import React from "react";
import { Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import ClonicDraggableList from "@/components/advancedui/draggable/ClonicDraggableList.tsx";
import DraggableCardList from "@/components/advancedui/draggable/DraggableCardList.tsx";
import DraggableGrid from "@/components/advancedui/draggable/DraggableGrid.tsx";
import DraggableList from "@/components/advancedui/draggable/DraggableList.tsx";
import HandleDraggableList from "@/components/advancedui/draggable/HandleDraggableList.tsx";
import NestedSortableList from "@/components/advancedui/draggable/NestedSortableList.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Draggable: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Draggable"
          title="Advance Ui"
          path={["Draggable"]}
          Icon={BriefcaseMetal}
        />
        <Row className="share-list-responsive">
          <DraggableList />
          <ClonicDraggableList />
          <HandleDraggableList />
          <DraggableGrid />
          <NestedSortableList />
        </Row>
        <DraggableCardList />
      </Container>
    </div>
  );
};

export default Draggable;
