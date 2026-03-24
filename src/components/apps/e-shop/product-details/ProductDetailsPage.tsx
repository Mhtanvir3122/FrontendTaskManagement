import { Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import ProductImage from "@/components/apps/e-shop/product-details/ProductImage.tsx";
import ProductInfo from "@/components/apps/e-shop/product-details/ProductInfo.tsx";
import ProductReturns from "@/components/apps/e-shop/product-details/ProductReturns.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ProductDetailsPage = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Product Details"
          title="Apps"
          path={["E-shop", "Product Details"]}
          Icon={StackIcon}
        />
        <Row>
          <ProductImage />
          <ProductInfo />
          <ProductReturns />
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
