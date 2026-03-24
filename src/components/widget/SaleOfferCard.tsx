import { Badge, Button, Card } from "react-bootstrap";

const SaleOfferCard = () => {
  return (
    <Card className="offer-card-box">
      <div className="circle-ribbon circle-left ribbon-danger b-4-white">
        50%
      </div>

      <Card.Body className="offer-card-body overflow-hidden">
        <div>
          <div className="d-flex justify-content-center gap-2 my-3">
            <Badge className="text-primary f-s-10 bg-white-500">Clothing</Badge>
            <Badge className="text-primary f-s-10 bg-white-500">Toys</Badge>
            <Badge className="text-primary f-s-10 bg-white-500">
              Accessories
            </Badge>
          </div>
          <h5 className="text-white mt-4">
            Super{" "}
            <span className="text-bg-primary p-1 f-s-26 f-w-700">Kids'</span>{" "}
            Weekend
            <br /> <span className="text-danger highlight-word p-1">Sale</span>
          </h5>
        </div>
        <div>
          <Button
            href="/apps/e-shop/product"
            target="_blank"
            className="btn-white f-w-500 w-100 my-2"
          >
            Shop Now
          </Button>
          <a className="f-s-12 f-w-500 text-white text-d-underline" href="#">
            Minimum purchase of $30 required. Online & in-store.
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SaleOfferCard;
