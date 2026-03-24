import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";

import { productlist } from "@/data/app/e-shop/productlist/Productlist.ts";
import { StackIcon } from "@phosphor-icons/react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ProductList = () => {
  const [productPageList, setProductPageList] = useState(productlist);

  const handleDelete = (productId: number) => {
    const updatedProductList = productPageList.filter(
      (product) => product.id !== productId
    );
    setProductPageList(updatedProductList);
  };

  const categoryColorMap: Record<string, string> = {
    Purse: "info",
    Watch: "success",
    Bag: "warning",
    Clothing: "danger",
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Product List"
        title="Apps"
        path={["E-shop", "Product List"]}
        Icon={StackIcon}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body className="p-0">
              <div className="table-responsive app-scroll">
                <Table
                  hover
                  className="product-list-table table-bottom-border table-striped align-middle mb-0"
                >
                  <thead>
                    <tr>
                      <th>
                        <Form.Check type="checkbox" id="select-all" />
                      </th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Category</th>
                      <th>Seller</th>
                      <th>Published</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productPageList.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 w-35 h-35">
                              <Image
                                src={product.image}
                                alt={product.name}
                                rounded
                                fluid
                                className="w-100 h-100 object-fit-cover"
                              />
                            </div>
                            <span className="fw-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="text-success f-w-600">
                          {product.price}
                        </td>
                        <td>{product.stock}</td>
                        <td>
                          <Badge
                            bg={
                              categoryColorMap[product.category] || "secondary"
                            }
                          >
                            {product.category}
                          </Badge>
                        </td>
                        <td>{product.seller}</td>
                        <td className="f-w-600">{product.published}</td>
                        <td className="d-flex gap-3">
                          <Button
                            variant="outline-success"
                            size="sm"
                            className="rounded-circle d-flex-center p-0 w-30 h-30"
                          >
                            <IconEdit size={16} />
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="rounded-circle d-flex-center p-0 w-30 h-30"
                          >
                            <IconTrash size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
