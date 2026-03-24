import React from "react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import { Briefcase} from "phosphor-react";
import {Col, Container, Row} from "react-bootstrap";
import VerticalMap from "@/components/other-pages/terms-condition/VerticalMap.tsx";
import DescriptionMap from "@/components/other-pages/terms-condition/DescriptionMap.tsx";


const Sitemap: React.FC = () => {
    return (
        <div>
            <Container fluid>
                <Breadcrumbs
                    mainTitle="Sitemap"
                    title=" Other Pages "
                    path={["Sitemap"]}
                    Icon={Briefcase}
                />

            </Container>
            <Row>
               <Col>
                   <VerticalMap />
               </Col>
                <Col>
                    <DescriptionMap />
                </Col>
            </Row>
        </div>
    );
};

export default Sitemap;