import React from "react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import { ArrowElbowDownRight, Briefcase, StarFour} from "phosphor-react";
import {Card, CardBody, Col, Container, Row} from "react-bootstrap";


const paragraphs = [
    "However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.",
    "Some of the advantages to be derived include the following:",
];

const listItems = [
    "Terms and Conditions agreements provide clarity about what should occur in any given circumstance. They set out the essential business terms you are offering to your customers and help contractual parties to understand their rights, obligations, functions, and accountabilities.",
    "Your Terms and Conditions agreement produces a well-organized and comprehensive system by covering commercial terms such as delivery, price, payment, and other areas often overlooked by businesses.",
    "They also proceed to limit your liability, disclaiming your liability for failure or delay caused by inevitable circumstances, therefore protecting your intellectual property rights.",
    "There may be specific regulations that apply to your industry, and you may refer to them in your Terms and Conditions. Having a defined Terms and Conditions agreement helps ensure conformity with applicable laws.",
    "Having a clear set of Terms and Conditions helps you deliver a consistently excellent level of customer service while avoiding any ambiguity.",
    "By doing this, customer's expectations are well-managed regarding delivery and payment, therefore eliminating disappointments in your provision of services.",
    "If you have a clear set of Terms and Conditions, it is considerably easier to spot a breach of contract. Written contracts provide assurance and are easier to enforce whenever required.",
    "This clause is a provision where you, the business owner or inventor, retains ownership of your patents, copyrights, trademarks, trade dresses, or trade secrets.",
];

const moreParagraphs = [
    "The Terms and Conditions agreement explains appropriate and allowed use of the website or app, what users can and can't do on the site, what user rights are, and what information legally belongs to the company. In order to use the product or service, you must agree to abide by its Terms and Conditions.",
    "Here, we'll take a closer look at what a Terms and Conditions agreement is and why it's important to have one for your online business.",
];

const copyrightParagraphs = [
    "The names and logos and all related product and service names, design marks and slogans are the trademarks or service marks of SGSPL, IRCPL, its affiliates, its partners or its suppliers. All other marks are the property of their respective companies. No trademark or service mark license is granted in connection with the materials contained on this Site. Access to this Site does not authorize anyone to use any name, logo or mark in any manner.",
    "References on this Site to any names, marks, products or services of third parties or hypertext links to third party sites or information are provided solely as a convenience to you and do not in any way constitute or imply IRCPL or SGSPL endorsement, sponsorship or recommendation of the third party, information, product or service.",
];

const TermsCondition: React.FC = () => {
    return (
            <Container fluid>
                <Breadcrumbs
                    mainTitle="Terms Condition"
                    title=" Other Pages "
                    path={["Terms Condition"]}
                    Icon={Briefcase}
                />
              <Row className="terms-condition-container">
                <Col>
                  <Card>
                    <CardBody>
                      <h3 className="text-primary">
                        <StarFour size={20} weight="fill" className="text-primary me-2"/>
                        Welcome To ki-admin
                      </h3>

                      <div className="mt-4">
                        {paragraphs.map((text, idx) => (
                          <p key={idx} className="text-dark f-s-16 mt-3 corner-arrow">
                            <ArrowElbowDownRight size={16} weight="fill" className="me-2 text-primary" />
                            {text}
                          </p>
                        ))}

                        <ul className="px-5 py-3">
                          {listItems.map((item, idx) => (
                            <li
                              key={idx}
                              className="diamond diamond-bullet-secondary f-s-14 text-secondary"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>

                        {moreParagraphs.map((text, idx) => (
                          <p key={`mp-${idx}`} className="text-dark f-s-16 mt-3">
                            <ArrowElbowDownRight size={16} weight="fill" className="me-2 text-primary" />
                            {text}
                          </p>
                        ))}

                        <h4 className="text-primary mt-3">
                          <StarFour size={18} weight="fill" className="text-primary me-2"/>
                          Copyright & Trademark
                        </h4>

                        {copyrightParagraphs.map((text, idx) => (
                          <p key={`cp-${idx}`} className="text-dark f-s-16 mt-3">
                            <ArrowElbowDownRight size={16} weight="fill" className="me-2 text-primary" />
                            {text}
                          </p>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
    );
};

export default TermsCondition;