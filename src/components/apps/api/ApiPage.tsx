import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { apiKeyData } from "@/data/app/api/apiData.tsx";
import { StackIcon } from "@phosphor-icons/react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";

import ApiTableCards from "@/components/apps/api/ApiTableCards.tsx";
import ApiTopCards from "@/components/apps/api/ApiTopCards.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ApiPage = () => {
  const [apiKeyList, setApiKeyList] = useState(apiKeyData);

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Api"
        title="Apps"
        path={["Api"]}
        Icon={StackIcon}
      />
      <Row>
        <ApiTopCards apiKeyList={apiKeyList} setApiKeyList={setApiKeyList} />
        <ApiTableCards apiKeyList={apiKeyList} setApiKeyList={setApiKeyList} />
      </Row>
    </Container>
  );
};

export default ApiPage;
