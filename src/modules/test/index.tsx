import { useRef, useState } from "react";
import {  Container, Row } from "react-bootstrap";

import { tableData } from "@/data/table-page/BasicTable/BasicTableData";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";

import CertificationForm from "./Form";
import HoverTable from "./Table66";
import { AgentMappingModal } from "./modal/AgentMappingModal";
import Button from "@/components/myComponant/Button";
import Icon from "@/components/myComponant/Icon";

const Certification = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const updateData = useRef<
    | {
        data: any;
        dType: string | null;
        idx: number | null;
      }
    | undefined
  >(undefined);

  const onEdit = (data: any, dType: any, idx = -1) => {
    updateData.current = { data, dType, idx };
    setIsDrawerOpen(true);
  };

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
    updateData.current = undefined;
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onCancelModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Container fluid>
      <Row>
        <Breadcrumbs
          mainTitle="Base Input"
          title="Form Elements"
          path={["Base Input"]}
          Icon={Cardholder}
        />

        {/* {isDrawerOpen ? null : ( */}
        <div
          className="d-flex gap-3 justify-content-end"
          // style={{
          //   visibility: isDrawerOpen ? "hidden" : "visible",
          //   pointerEvents: isDrawerOpen ? "none" : "auto",
          // }}
        >
          <Button size="md" onClick={() => onEdit(null, null, -1)}>
            <Icon icon="add" />
            &nbsp;যুক্ত করুন
          </Button>

            <Button onClick={() => setIsOpenModal(true)
            }>
            <Icon icon="add" />
            &nbsp;modal
          </Button>
        </div>
        {/* )} */}
        <div className="mt-4">
          {/* <CertificationTable /> */}

          <HoverTable tableData={tableData} />

          {/* <ProblemTypeTable data={tableData} /> */}
        </div>

        <CertificationForm
          isOpen={isDrawerOpen}
          onClose={onDrawerClose}
          updateData={updateData.current}
          onSubmit={onSubmit}
        />

        <AgentMappingModal isOpen={isOpenModal} onClose={onCancelModal} data={"dsl;jdslia"}/>
      </Row>
    </Container>
  );
};
export default Certification;
