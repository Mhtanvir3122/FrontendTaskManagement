import { Card, Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import CheckoutProducts from "@/components/apps/e-shop/check-out/CheckoutProducts.tsx";
import CheckoutTabs from "@/components/apps/e-shop/check-out/CheckoutTabs.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const CheckOutPage = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Checkout"
          title="Apps"
          path={["E-shop", "Checkout"]}
          Icon={StackIcon}
        />
        <Row>
          <Col lg={8}>
            <CheckoutTabs />
          </Col>

          <Col lg={4}>
            <Card>
              <Card.Body>
                <CheckoutProducts />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckOutPage;
