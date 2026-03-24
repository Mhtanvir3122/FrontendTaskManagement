import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

// --- TYPES ---
type InfoCardType = {
  title: string;
  subtitle: string;
  content: string;
  date: string;
  buttonText: string;
};

// --- DATA ---
const cardData: InfoCardType[] = [
  {
    title: "Default Card",
    subtitle: "Where does it come from?",
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard McClinton,
             a Latin professor at Hampered-Sydney College in Virginia, looked up one of the more obscure Latin words, 
             consectetur, from a Lorem Ipsum passage, and going through the cites 
             of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
             1.10.33 of "de Minibus Bono rum et Malo rum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book 
             is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
             "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32`,
    date: "1 day ago",
    buttonText: "Read More",
  },
];

const BlankPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Blank"
          title="Other Pages"
          path={["Blank"]}
          Icon={Briefcase}
        />
      </Container>
      <Row>
        {cardData.map((card, index) => (
          <Col xs={12} key={index}>
            <Card>
              <Card.Header>
                <h5>{card.title}</h5>
              </Card.Header>
              <Card.Body>
                <h5>{card.subtitle}</h5>
                <p className="text-secondary f-s-15">{card.content}</p>
              </Card.Body>
              <Card.Footer>
                <p className="float-start text-secondary p-t-10 f-s-15">
                  {card.date}
                </p>
                <Button variant="primary" className="float-end">
                  {card.buttonText}
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlankPage;
