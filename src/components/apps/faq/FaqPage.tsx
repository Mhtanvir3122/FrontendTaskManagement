import React from "react";
import {
  Accordion,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import { IconHelpCircle, IconSearch } from "@tabler/icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

type AccordionItem = {
  eventKey: string;
  title: string;
  content: string | React.ReactNode;
  defaultActive?: boolean;
  icon?: React.ReactNode;
};

type AccordionSection = {
  title: string;
  items: AccordionItem[];
  className?: string;
  id: string;
};

const FaqPage = () => {
  const faqSections: AccordionSection[] = [
    {
      title: "Frequently Asked Questions",
      id: "accordion-faq",
      items: [
        {
          eventKey: "0",
          title: "What is FAQs",
          defaultActive: true,
          content:
            "A list of questions and answers relating to a particular subject, especially one giving basic information for users of a website. A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps",
        },
        {
          eventKey: "1",
          title: "What is an FAQs page?",
          content:
            "Frequently Asked Questions (FAQ) pages contain a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. Sure there are chatbots, support lines, and customer reviews to help shoppers on their path to purchase, but there's one forgotten customer service tactic that is cost-effective and streamlined. That tactic is an FAQ page.",
        },
        {
          eventKey: "2",
          title: "Why you should make an FAQs page?",
          content:
            "An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers. Before diving into how to make an FAQ page, you need to know why having one is so important. There are so many reasons beyond improving the customer experience for perfecting your FAQ page. Keep in mind the importance of an FAQ page when developing your own e-commerce website, so you can make sure it increases sales and not the other way around.",
        },
        {
          eventKey: "3",
          title: "How to make an FAQ page?",
          content: (
            <>
              There are seven simple steps to make the perfect FAQ page for your
              business. The design of an FAQ page is crucial for an easy-to-use
              customer experience. Follow these steps and your customer success
              team will thank you.
              <ul className="mt-3">
                <li>- Determine the questions</li>
                <li>- Categorize the questions</li>
                <li>- Highlight or link the most popular questions</li>
                <li>- Include a search bar</li>
                <li>- Align with your brand look and feel</li>
                <li>- Update regularly</li>
                <li>- Track and improve</li>
              </ul>
            </>
          ),
        },
        {
          eventKey: "4",
          title: "What are the most frequently asked questions?",
          content: (
            <>
              A good FAQ is general enough to address many issues. There are
              questions that just about every company answers on their FAQ page,
              so if you're struggling to get started use these as your starting
              point. If they're relevant to your company, of course.
              <ul className="mt-3">
                <li>- What is the return policy?</li>
                <li>- What are the shipping options?</li>
                <li>- What do I do if I never received my order?</li>
                <li>- When will I receive my order?</li>
                <li>- How do I make sure I order the right size?</li>
                <li>- Where are you located?</li>
                <li>- Can I make changes to an order I already placed?</li>
                <li>- How do I get a new password?</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "Admin Dashboard",
      id: "accordion-admin",
      items: [
        {
          eventKey: "5",
          title: "What is Admin Dashboard?",
          defaultActive: true,
          content:
            "The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports ...",
        },
        {
          eventKey: "6",
          title: "What is responsive Admin Dashboard",
          content:
            "An admin dashboard provides important data insights and controls for managing various aspects of an application or website. In this article, we will explore the process of creating a responsive admin dashboard using the three pillars of web development: HTML, CSS, and JavaScript.",
        },
        {
          eventKey: "7",
          title: "Why cannot I see the dashboard in my workspace?",
          content:
            "Dashboards are not available for the customers with fiscal calendars.",
        },
        {
          eventKey: "8",
          title: "What user role should I have to use dashboards?",
          content:
            "All workspace users can view dashboards and set up alerts on KPI changes (see Add an Alert to a KPI). Only workspace editors, explorers, and administrators can Create Dashboards.",
        },
        {
          eventKey: "9",
          title: "Can I change the default date filter for a dashboard?",
          content:
            "Yes. Dashboards support sending regular emails with either the whole dashboard and/or individual insights from the dashboard (see Schedule Automatic Emailing of Dashboards). For each KPI on a dashboard, you can also set up email alerts to be notified when the KPI value reaches a certain threshold (see Add an Alert to a KPI).",
        },
      ],
    },
    {
      title: "Privacy & Policy",
      id: "accordion-privacy",
      items: [
        {
          eventKey: "10",
          title: "What is a Privacy Policy?",
          defaultActive: true,
          content: (
            <>
              A Privacy Policy is a legal agreement designed to let visitors to
              your website or users of your app know what personal information
              you gather about them, how you use this information and how you
              keep it safe.
              <Accordion className="mt-2" id="nested-privacy-accordion">
                {[
                  {
                    eventKey: "10-1",
                    title: "What is privacy?",
                    content:
                      "Privacy is the ability of an individual or group to seclude themselves or information about themselves, and thereby express themselves selectively.",
                  },
                  {
                    eventKey: "10-2",
                    title: "What is Policy?",
                    content:
                      "Policy is a deliberate system of guidelines to guide decisions and achieve rational outcomes.",
                  },
                ].map((item) => (
                  <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </>
          ),
        },
        {
          eventKey: "11",
          title: "What is diffusion privacy and policy",
          content:
            "The purpose of this Privacy Policy is to set out in an accountable and transparent way the collection and use of information by Diffusion. Information will only be collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes.",
        },
        {
          eventKey: "12",
          title: "Why privacy policy is important",
          content:
            "The main reason to have a privacy policy is to convey to the clients that the business considers their privacy seriously. Several websites gather the client's information, and it is vital to let them know that their data is safe with the business.",
        },
      ],
    },
    {
      title: "Payment System",
      id: "accordion-payment",
      items: [
        {
          eventKey: "13",
          title: "What is payment system",
          defaultActive: true,
          content:
            "A payment system is any system used to settle financial transactions through the transfer of monetary value. This includes the institutions, payment instruments such as payment cards, people, rules, procedures, standards, and technologies that make its exchange possible.",
        },
        {
          eventKey: "14",
          title: "How many payment system types",
          content:
            "A payment can be made in the form of cash, check, wire transfer, credit card, or debit card. More modern methods of payment types leverage the Internet and digital platforms.",
        },
        {
          eventKey: "15",
          title: "Payment system example",
          content:
            "This includes debit cards, credit cards, electronic funds transfers, direct credits, direct debits, internet banking and e-commerce payment systems. Payment systems may be physical or electronic and each has its own procedures and protocols.",
        },
        {
          eventKey: "16",
          title: "Different types of payment",
          content: (
            <ul>
              <li>- Credit Cards</li>
              <li>- Wire transfer</li>
              <li>- Debit card</li>
              <li>- Wallet</li>
              <li>- Online banking</li>
              <li>- Bank</li>
              <li>- Cash</li>
              <li>- Cheque</li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Faq"
        title="Apps"
        path={["Faq"]}
        Icon={StackIcon}
      />

      <div className="faq-header text-center my-4">
        <img src="/images/logo/3.png" alt="Logo" />
        <h2 className="text-dark fw-bold">How Can We Help?</h2>
        <Form className="app-form search-div mt-3">
          <InputGroup className="b-r-search">
            <InputGroup.Text className="bg-primary text-white border-0">
              <IconSearch size={18} />
            </InputGroup.Text>
            <FormControl type="text" placeholder="Search..." />
          </InputGroup>
        </Form>
      </div>

      <Row className="faq-accordion">
        {faqSections.map((section) => (
          <React.Fragment key={section.id}>
            <div className="faq-heading mb-3">
              <h3>
                <IconHelpCircle size={25} className="pe-2" /> {section.title}
              </h3>
            </div>
            <Col lg={8} className="offset-lg-2 mb-3">
              <Accordion
                className="app-accordion accordion-primary"
                defaultActiveKey={
                  section.items.find((item) => item.defaultActive)?.eventKey
                }
              >
                {section.items.map((item) => (
                  <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                    <Accordion.Header>
                      {item.icon || (
                        <IconHelpCircle size={25} className="pe-2" />
                      )}
                      {item.title}
                    </Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default FaqPage;
