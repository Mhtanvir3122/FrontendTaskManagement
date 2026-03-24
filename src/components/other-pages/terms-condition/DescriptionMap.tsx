import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Briefcase, Browsers, FirstAidKit, House, SquaresFour} from "phosphor-react";


// --- TYPES ---
type SubItem = {
    title: string;
    description?: string;
    children?: SubItem[];
};

type DescriptionMapItem = {
    title: string;
    icon?: React.ReactNode;
    children?: SubItem[];
};

// --- DATA ---
const descriptionMapData: DescriptionMapItem[] = [
    {
        title: "Dashboards",
        icon: <House size={18} className="me-2" />,
        children: [
            {
                title: "Ecommerce",
                description:
                    "E-commerce dashboard involves presenting key metrics and insights that help businesses " +
                    "make informed decisions. Here are some essential components and ideas for an e-commerce " +
                    "dashboard",
            },
            { title: "Project" },
            { title: "Crypto" },
            { title: "Education" },
        ],
    },
    {
        title: "Apps",
        icon: <SquaresFour size={18} className="me-2"/>,
        children: [
            { title: "Kanban board" },
            {
                title: "Email-Page",
                children: [
                    {
                        title: "Email",
                        description:
                            "Creating effective content for an e-" +
                            "commerce email page involves" +
                            " presenting critical email marketing" +
                            " metrics and performance indicators.",
                    },
                ],
            },
        ],
    },
    {
        title: "UI Kit",
        icon: <FirstAidKit size={18} className="me-2" />,
    },
    {
        title: "Advance UI",
        icon: <Briefcase size={18} className="me-2" />,
    },
    {
        title: "Other Pages",
        icon: <Browsers size={18} className="me-1"/>,
        children: [
            {
                title: "Landing Page",
                description:
                    "Landing page involves presenting key" +
                    " metrics and insights that help businesses" +
                    " make informed decisions. Here are some " +
                    "essential components and ideas for an e-" +
                    "commerce dashboard",
            },
        ],
    },
];


const renderSubItems = (items?: SubItem[]) => {
    if (!items) return null;
    return (
        <ul className="second-part list-unstyled">
            {items.map((sub, idx) => (
                <li key={idx}>
                    <a href="#">{sub.title}</a>
                    {sub.description && (
                        <div className="content-box">
                            <p>{sub.description}</p>
                        </div>
                    )}
                    {sub.children && renderSubItems(sub.children)}
                </li>
            ))}
        </ul>
    );
};


const DescriptionMap: React.FC = () => {
    return (
        <Row>
            <Row>
                <Col>
                    <Card className="sitemap-card">
                        <Card.Header>
                            <h5>Map With Description</h5>
                        </Card.Header>
                        <Card.Body className="app-scroll">
                            <Col xs={12}>
                                <div className="vertical-sitemap">
                                    <ul className="list-unstyled">
                                        <li className="p-0 parent-title">
                                            <a href="#" className="fw-medium fs-14">
                                                ki-admin-react
                                            </a>
                                        </li>
                                        <li>
                                            {descriptionMapData.map((section, index) => (
                                                <div className="first-part" key={index}>
                                                    <div className="list-wrap">
                                                        <a href="#" className="fw-medium text-primary d-flex align-items-center">
                                                            {section.icon}
                                                            {section.title}
                                                        </a>
                                                    </div>
                                                    {renderSubItems(section.children)}
                                                </div>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
};

export default DescriptionMap;
