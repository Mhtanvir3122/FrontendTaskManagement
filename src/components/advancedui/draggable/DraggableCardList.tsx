import React, { useEffect, useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { IconHeart } from "@tabler/icons-react";
import Sortable from "sortablejs";

type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cardItems: CardItem[] = [
  {
    id: 1,
    title: "Entire apartment",
    description: "Nice 24sqm flat, 2min to city center. Excellent center light",
    image: "/images/draggable/01.jpg",
  },
  {
    id: 2,
    title: "The Art of Minimalism",
    description: "The guide offers practical tips on decluttering spaces",
    image: "/images/draggable/02.jpg",
  },
  {
    id: 3,
    title: "Color and Texture",
    description: "It emphasizes the psychological effects of planning",
    image: "/images/draggable/03.jpg",
  },
  {
    id: 4,
    title: "Luxurious Living",
    description: "It emphasizes the importance of strategic planning.",
    image: "/images/draggable/04.jpg",
  },
];

const DraggableCardList: React.FC = () => {
  const draggableCardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (draggableCardRef.current) {
      new Sortable(draggableCardRef.current, {
        animation: 150,
        ghostClass: "blue-background-class",
      });
    }
  }, []);

  return (
    <Row className="draggable-card-responsive"
      ref={draggableCardRef}
    >
      {cardItems.map((item) => (
        <Col key={item.id} xs={6} sm={6} lg={3}>
          <Card className="draggable-card">
            <Card.Body>
              <div className="draggable-card-img">
                <Card.Img variant="top" src={item.image} />
                <div className="draggable-card-icon">
                  <span className="bg-white h-45 w-45 d-flex-center b-r-50">
                    <IconHeart size={18} className="text-danger f-s-18" />
                  </span>
                </div>
              </div>
              <div className="draggable-card-content pt-3">
                <Card.Title as="h6" className="mb-2 f-w-500">
                  {item.title}
                </Card.Title>
                <Card.Text className="f-s-16 text-secondary">
                  {item.description}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DraggableCardList;
