import React from "react";
import {Card, CardBody, CardHeader, Col, Row} from "react-bootstrap";
import {
    House,
    ChartPieSlice,
    FirstAidKit,
    Briefcase,
    FileText,
    Headphones,
    EnvelopeSimple,
    ShoppingCartSimple,
    Database,
    CirclesThreePlus,
    Cards,
    MapTrifold,
    ChartPie,
    GridFour,
    NotePencil,
    HandPointing,
    Warning,
    Browsers,
    Notebook, NumberCircleTwo,
} from "phosphor-react";



// --- TYPES ---
export type SitemapItem = {
    title: string;
    icon?: React.ReactNode;
    children?: SitemapItem[];
};

// --- DATA ---
export const sitemapData: SitemapItem[] = [
    {
        title: "Dashboards",
        icon: <House size={18} className="me-1" />,
        children: [
            { title: "Ecommerce" },
            { title: "Projects" },
            { title: "Crypto" },
            { title: "Education" },
        ],
    },
    {
        title: "Apps",
        icon: <Database size={18} className="me-1" />,
        children: [
            { title: "Calendar" },
            { title: "Invoice" },
            { title: "Kanban Board" },
            { title: "Profile" },
            { title: "Timeline" },
            { title: "Faqs" },
            { title: "Pricing" },
            { title: "Gallery" },
            { title: "Team" },
            { title: "Chat" },
            {
                title: "Email Page",
                icon: <EnvelopeSimple size={18} className="me-1" />,
                children: [{ title: "Email" }, { title: "Read Email" }],
            },
            {
                title: "E-Shop",
                icon: <ShoppingCartSimple size={18} className="me-1" />,
                children: [
                    { title: "Cart" },
                    { title: "Product" },
                    { title: "Add Product" },
                    { title: "Product-Details" },
                    { title: "Product List" },
                    { title: "Orders" },
                    { title: "Orders Details" },
                    { title: "Orders List" },
                    { title: "Checkout" },
                    { title: "Wishlist" },
                ],
            },
            {
                title: "Projects Page",
                children: [{ title: "Projects" }, { title: "Projects Details" }],
            },
            { title: "Todo" },
            { title: "Filemanager" },
            {
                title: "Blog Page",
                children: [{ title: "Blog" }, { title: "Blog Details" }],
            },
        ],
    },
    {
        title: "Widgets",
        icon: <ChartPieSlice size={18} className="me-1" />,
    },
    {
        title: "Component",
        children: [
            {
                title: "UI Kit",
                icon: <FirstAidKit size={18} className="me-1" />,
                children: [
                    { title: "Cheatsheet" },
                    { title: "Alert" },
                    { title: "Badges" },
                    { title: "Buttons" },
                    { title: "Cards" },
                    { title: "Dropdown" },
                    { title: "Grid" },
                    { title: "Avatar" },
                    { title: "Tabs" },
                    { title: "Accordions" },
                    { title: "Progress" },
                    { title: "Notifications" },
                    { title: "Lists" },
                    { title: "Helper Classes" },
                    { title: "Background" },
                    { title: "Divider" },
                    { title: "Ribbons" },
                    { title: "Editor" },
                    { title: "Collapse" },
                    { title: "Navbar" },
                    { title: "Footer" },
                    { title: "Shadow" },
                    { title: "Wrapper" },
                    { title: "Bullet" },
                    { title: "Placeholder" },
                    { title: "Alignment Thing" },
                ],
            },
            {
                title: "Advance UI",
                icon: <Briefcase size={18} className="me-1" />,
                children: [
                    { title: "Modals" },
                    { title: "Offcanvas Toggle" },
                    { title: "Sweat Alert" },
                    { title: "Scrollbar" },
                    { title: "Spinners" },
                    { title: "Animation" },
                    { title: "Video Embed" },
                    { title: "Tour" },
                    { title: "Slider" },
                    { title: "Bootstrap Slider" },
                    { title: "Scrollpy" },
                    { title: "Tooltip & Popovers" },
                    { title: "Rating" },
                    { title: "Prismjs" },
                    { title: "Count Down" },
                    { title: "Count Up" },
                    { title: "Draggable" },
                    { title: "Tree View" },
                    { title: "Block UI" },
                ],
            },
            {
                title: "Icons",
                icon: <CirclesThreePlus size={18} className="me-1" />,
                children: [
                    { title: "Fontawesome" },
                    { title: "Flag" },
                    { title: "Tabler" },
                    { title: "Weather" },
                    { title: "Animated" },
                    { title: "Iconoir" },
                    { title: "Phosphor" },
                ],
            },
            {
                title: "Misc",
                icon:<Cards size={18}  className="me-1"/>,
            },
        ],
    },
    {
        title: "Map & Charts",
        children: [
            {
                title: "Map",
                icon:<MapTrifold size={18} className="me-1" /> ,
                children: [{ title: "Google Maps" }, { title: "Leaflet Map" }],
            },
            {
                title: "Chart",
                icon:<ChartPie size={18} className="me-1" />,
                children: [
                    { title: "Chart JS" },
                    {
                        title: "Apexcharts",
                        children: [
                            { title: "Line" },
                            { title: "Area" },
                            { title: "Column" },
                            { title: "Bar" },
                            { title: "Mixed" },
                            { title: "Timeline & Range-Bars" },
                            { title: "Candlestick" },
                            { title: "Boxplot" },
                            { title: "Bubble" },
                            { title: "Scatter" },
                            { title: "Heatmap" },
                            { title: "Treemap" },
                            { title: "Pie" },
                            { title: "Radialbar" },
                            { title: "Radar" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Table & Forms",

        children: [
            {
                title: "Table",
                icon:<GridFour size={18} className="me-1" />,
                children: [
                    { title: "Basic Table" },
                    { title: "Data Table" },
                    { title: "List JS" },
                    { title: "Advance Table" },
                ],
            },
            {
                title: "Forms Elements",
                icon:<NotePencil size={18} className="me-1" />,
                children: [
                    { title: "Form Validation" },
                    { title: "Base Input" },
                    { title: "Checkbox & Radio" },
                    { title: "Input Groups" },
                    { title: "Input Masks" },
                    { title: "Floating Labels" },
                    { title: "Datetimepicker" },
                    { title: "Touch Spin" },
                    { title: "Select2" },
                    { title: "Switch" },
                    { title: "Range Slider" },
                    { title: "Typeahead" },
                    { title: "Textarea" },
                    { title: "Clipboard" },
                    { title: "File Upload" },
                    { title: "Dual Listboxes" },
                    { title: "Default Forms" },
                ],
            },
            {
                title: "Ready to Use",
                icon:<HandPointing size={18} className="me-1"/>,
                children: [
                    { title: "Form Wizards" },
                    { title: "Form Wizards 1" },
                    { title: "Form Wizards 2" },
                    { title: "Ready to Use Form" },
                    { title: "Ready to Use Tables" },
                ],
            },
        ],
    },
    {
        title: "Pages",
        icon: <Notebook size={18} className="me-1" />,
        children: [
            {
                title: "Auth Pages",
                children: [
                    { title: "Sign In" },
                    { title: "Sign In with Bgimage" },
                    { title: "Sign Up" },
                    { title: "Sign Up with Bgimage" },
                    { title: "Password Reset" },
                    { title: "Password Reset with Bgimage" },
                    { title: "Password Create" },
                    { title: "Lock Screen" },
                    { title: "Lock Screen with Bgimage" },
                    { title: "Two-Step Verification" },
                    { title: "Two-Step Verification with Bgimage" },
                ],
            },
            {
                title: "Error Pages",
                icon: <Warning size={18} className="me-1"/>,
                children: [
                    { title: "Bad Request" },
                    { title: "Forbidden" },
                    { title: "Not Found" },
                    { title: "Internal Server" },
                    { title: "Service Unavailable" },
                ],
            },
            {
                title: "Other Pages",
                icon: <Browsers size={18} className="me-1"/>,
                children: [
                    { title: "Blank" },
                    { title: "Maintenance" },
                    { title: "Landing Page" },
                    { title: "Coming Soon" },
                    { title: "Sitemap" },
                    { title: "Privacy Policy" },
                    { title: "Terms & Condition" },
                ],
            },
        ],
    },
    {
        title: "Others",
        children: [
            {
                title: "2 Level",
                icon: <NumberCircleTwo size={18} className="me-1"/>,
                children: [
                    { title: "Blank" },
                    {
                        title: "Another Level",
                        children: [{ title: "Blank" }],
                    },
                ],
            },
            { title: "Document", icon: <FileText size={18} className="me-1" /> },
            { title: "Support", icon: <Headphones size={18} className="me-1" /> },
        ],
    },
];

// --- COMPONENT ---
const RecursiveList = ({ items }: { items: SitemapItem[] }) => {
    return (
        <ul className="second-part list-unstyled">
            {items.map((item, index) => (
                <li key={index}>
                    <a href="#" className="d-flex align-items-center">
                        {item.icon}
                        {item.title}
                    </a>
                    {item.children && <RecursiveList items={item.children} />}
                </li>
            ))}
        </ul>
    );
};

const VerticalMap: React.FC = () => {
    return (
        <Row>
            <Col>
                <Card className="sitemap-card">
                    <CardHeader>
                        <h5>Vertically Map</h5>
                    </CardHeader>
                    <CardBody className="app-scroll">
                        <Col xs={12}>
                            <div className="vertical-sitemap">
                                <ul className="list-unstyled mb-0">
                                    <li className="p-0 parent-title">
                                        <a href="#" className="fw-medium fs-14">
                                            ki-admin-react
                                        </a>
                                    </li>
                                    <li>
                                        <div className="first-part">
                                            <div className="list-wrap">
                                                <a href="#" className="fw-medium text-primary">
                                                    Sitemap Navigation
                                                </a>
                                            </div>
                                            <RecursiveList items={sitemapData} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default VerticalMap;
