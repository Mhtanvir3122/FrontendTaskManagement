import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type AiCommerceCardProps = {
  isWidgetPage?: boolean;
};

const AiCommerceCard = ({ isWidgetPage = false }: AiCommerceCardProps) => {
  return (
    <Card className="service-trial-card ">
      <Card.Body>
        <h5
          className={`text-white f-w-600 txt-ellipsis-1 ${isWidgetPage ? "mt-3" : ""}`}
        >
          AI Commerce
        </h5>
        <p className="text-white mt-2 txt-ellipsis-2">
          Smarter Shopping, Faster Growth
        </p>
        <div className={`service-img-box ${isWidgetPage ? "mt-4" : ""}`}></div>
        <div className="mt-4">
          <Link
            to="/apps/chat"
            target="_blank"
            className="btn btn-primary btn-sm w-100 text-nowrap"
          >
            Start Free Trial
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AiCommerceCard;
