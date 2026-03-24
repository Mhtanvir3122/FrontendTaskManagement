import { Container, Row } from "react-bootstrap";

import EcommerceCards from "@/components/dashboard/ecommerce-dashboard/EcommerceCards.tsx";
import ProductsCards from "@/components/dashboard/ecommerce-dashboard/ProductsCards.tsx";
import SalesCards from "@/components/dashboard/ecommerce-dashboard/SalesCards.tsx";

const EcommerceDashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <EcommerceCards />
        <SalesCards />
        <ProductsCards />
      </Row>
    </Container>
  );
};

export default EcommerceDashboardPage;
