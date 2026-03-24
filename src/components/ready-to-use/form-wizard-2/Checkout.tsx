import React, { useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import {
  ShoppingCart,
  AddressBook,
  CreditCard,
  Gift,
  Note,
  CheckCircle,
  X,
  Star,
  Plus,
  Info,
} from "phosphor-react";

interface TabType {
  id: string;
  label: string;
  icon: React.ReactNode;
  step: string;
}
interface CartItemType {
  id: number;
  image: string;
  title: string;
  size: string;
  color: string;
  items: number;
  price: number;
  rating: number;
}
const Checkout: React.FC = () => {
  const tabs: TabType[] = [
    { id: "tabs1", label: "Cart", icon: <ShoppingCart size={20} weight="bold" />, step: "Step 1" },
    { id: "tabs2", label: "Address", icon: <AddressBook size={20} weight="bold"/>, step: "Step 2" },
    { id: "tabs3", label: "Payment", icon: <CreditCard size={20} weight="bold"/>, step: "Step 3" },
    { id: "tabs4", label: "Offers", icon: <Gift size={20} weight="bold"/>, step: "Step 4" },
    { id: "tabs5", label: "Review", icon: <Note size={20} weight="bold"/>, step: "Step 5" },
    { id: "tabs6", label: "Completed", icon: <CheckCircle size={20} weight="bold"/>, step: "Step 6" },
  ];

  const cartItems: CartItemType[] = [
    {
      id: 1,
      image: "/images/ecommerce/23.jpg",
      title: "Sky & stylist - jacket",
      size: "medium",
      color: "Sky",
      items: 2,
      price: 500,
      rating: 3,
    },
    {
      id: 2,
      image: "/images/ecommerce/25.jpg",
      title: "Trendy & stylist shoes",
      size: "large",
      color: "Light",
      items: 2,
      price: 850,
      rating: 4,
    },
    {
      id: 3,
      image: "/images/ecommerce/13.jpg",
      title: "Designer golden watch",
      size: "large",
      color: "Light",
      items: 1,
      price: 350,
      rating: 4,
    },
  ];

  const [currentTab, setCurrentTab] = useState("tabs1");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedDelivery, setSelectedDelivery] = useState("economy");
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
  const [showGiftWrap, setShowGiftWrap] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("card");

  const toggleModal = () => setModalOpen(!modalOpen);
  const handlePaymentSelect = (method: string) => setSelectedPayment(method);

  const addresses = [
    {
      id: "home",
      label: "Home Address",
      address: "260 Zulma Stravenue, Wisozkton, KY 44193-0738",
      email: "collins@stroman.net",
      phone: "+1 828-726-3669",
    },
    {
      id: "office",
      label: "Office Address",
      address: "90897 Franecki Haven, West Maximo, KY 40770-5993",
      email: "bjast@hotmail.com",
      phone: "+1 863-422-2979",
    },
  ];

  const deliveryMethods = [
    {
      id: "economy",
      title: "Economy Shipping - FREE",
      description: "5 to 10 business days",
    },
    {
      id: "priority",
      title: "Priority overnight -$18.50",
      description: "Based on chosen delivery date",
    },
  ];
  const offerCards = [
    { title: "Bank Offers", desc: "Upto $480 discount on credit card." },
    { title: "Partner Offers", desc: "Get GST invoice and save up to 15% on...", ribbon: true },
    { title: "Other Offers", desc: "Buy 2 Bags, save up to 5% to 10%." },
  ];

  const offerList = [
    { id: "offerCheck", title: "Offer 1", description: "12% off on Visa card EMI..." },
    { id: "offerCheck1", title: "Offer 2", description: "INR 250 Discount on OneCard..." },
    { id: "offerCheck2", title: "Offer 3", description: "Extra 20% off (inclusive)..." },
  ];


  return (
    <Card>
      <Card.Header>
        <h5>Checkout Wizard</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={12} xl={3} className="mb-3">
            <div className="checkout-tab">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tabs ${currentTab === tab.id ? "current-checkout-tab" : ""}`}
                  onClick={() => setCurrentTab(tab.id)}
                >
                  <div className="d-flex align-items-center">
                    <div className="steps ms-2">{tab.icon}</div>
                    <div className="ps-3">
                      <h6 className="mb-0">{tab.label}</h6>
                      <small>{tab.step}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8} xl={6}>
            <div className="tab-contentlist">
              {currentTab === "tabs1" && (
                <Row>
                  <Col xs={12}>
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-box mb-3 w-100">
                        <div className="d-flex align-items-center w-100">
                          <img src={item.image} alt={item.title} className="rounded me-3" width={80} />
                          <div className="flex-grow-1">
                            <h6>{item.title}</h6>
                            <p><strong>Size</strong>: {item.size}</p>
                            <p><strong>Color</strong>: {item.color}</p>
                            <p><strong>Items</strong>: {item.items}</p>
                          </div>
                          <div className="cart-price-box">
                            <X size={20} className="text-secondary mb-2 cursor-pointer" />
                            <h6>${item.price}</h6>
                            <div className="mb-2">
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  key={index}
                                  size={16}
                                  weight={index < item.rating ? "fill" : "regular"}
                                  className={index < item.rating ? "text-warning" : "text-muted"}
                                />
                              ))}
                            </div>
                            <a href="#">Move to Favorites</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Col>
                </Row>
              )}
              {currentTab === "tabs2" && (
                <Row>
                  <Col md={12}><h5 className="mb-3">Your Address</h5></Col>
                  {addresses.map((addr) => (
                    <Col md={6} key={addr.id} className="mb-3">
                      <Card className="shadow-none">
                        <Card.Body className="address-content">
                          <Form.Check
                            type="radio"
                            name="address"
                            className="fs-6 tab-heading ms-2"
                            id={`address-${addr.id}`}
                            label={<span className="fw-bold">{addr.label}</span>}
                            checked={selectedAddress === addr.id}
                            onChange={() => setSelectedAddress(addr.id)}
                          />
                          <p className="text-muted mb-1">{addr.address}</p>
                          <p className="text-muted mb-1">{addr.email}</p>
                          <p>{addr.phone}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                  <Col md={6} className="mb-3">
                    <Card className="shadow-none">
                      <Card.Body className="added-content">
                        <Button variant="link-primary" onClick={toggleModal} className="p-0">
                          <Plus size={16} /> Add A New Address
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Modal show={modalOpen} onHide={toggleModal} centered>
                    <Modal.Header closeButton>
                      Add New Address
                    </Modal.Header>
                    <Modal.Body>
                      <Form className="app-form">
                        <Form.Group className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" placeholder="Enter address" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Address 2</Form.Label>
                          <Form.Control type="text" placeholder="Enter additional address info" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="Enter city" />
                        </Form.Group>
                        <Row>
                          <Col md={8}>
                            <Form.Group className="mb-3">
                              <Form.Label>State</Form.Label>
                              <Form.Select>
                                <option>Choose...</option>
                                <option>NY</option>
                                <option>CA</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={4}>
                            <Form.Group className="mb-3">
                              <Form.Label>Zip</Form.Label>
                              <Form.Control type="text" placeholder="Enter zip code" />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={toggleModal}>Close</Button>
                      <Button variant="primary">Add</Button>
                    </Modal.Footer>
                  </Modal>
                  <Col md={12}><h5 className="mb-3 text-muted">Delivery Method</h5></Col>
                  {deliveryMethods.map((method) => (
                    <Col md={6} key={method.id} className="mb-3">
                      <Card className="shadow-none">
                        <Card.Body className="select-content">
                          <Form.Check
                            type="radio"
                            name="delivery"
                            id={`delivery-${method.id}`}
                            label={<>
                              <span className="fw-bold text-muted">{method.title}</span><br />
                              <small className="text-muted">{method.description}</small>
                            </>}
                            checked={selectedDelivery === method.id}
                            onChange={() => setSelectedDelivery(method.id)}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                 <Col md={12}>
                      <div className="alert alert-border-info" role="alert">
                        <p>
                          <Info size={16} className="me-1 text-info" />
                          Expected delivery data is not guaranteed, if you are ordering for an event we suggest allowing 1 extra day.
                        </p>
                        <div className="text-end">
                          <a href="#" className="link-primary text-d-underline">Don't allow</a>
                          <a href="#" className="link-primary text-d-underline ms-2">Allow</a>
                        </div>
                      </div>
                    </Col>
                </Row>
              )}
              {currentTab === "tabs3" && (
                <div>
                  <Card className="shadow-none">
                    <Card.Body className="select-content">
                      <Form.Check
                        type="radio"
                        name="payment"
                        className="mb-3"
                        id="payment-card"
                        label={<span className="fs-6 tab-heading">Credit / Debit Card</span>}
                        checked={selectedPayment === "card"}
                        onChange={() => handlePaymentSelect("card")}
                      />
                      <Form className="mt-3 app-form">
                        <Row>
                          <Col md={12}>
                            <Form.Group className="mb-3">
                              <Form.Label>Cardholder Name</Form.Label>
                              <Form.Control type="text" placeholder="Olaf" required />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group className="mb-3">
                              <Form.Label>Card Number</Form.Label>
                              <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Expiration Date</Form.Label>
                              <Form.Control type="text" placeholder="MM/YY" required />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>CVC code</Form.Label>
                              <Form.Control type="text" placeholder="xxx" required />
                            </Form.Group>
                          </Col>
                          <Col md={12} className="text-end">
                            <Button variant="primary">Submit</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>

                  <div className="d-flex flex-wrap gap-3 mt-3">
                    {["visa", "paypal", "upi", "cod"].map((id) => (
                      <Card className="shadow-none flex-grow-1" key={id}>
                        <Card.Body className="select-content">
                          <Form.Check
                            type="radio"
                            name="payment"
                            id={`payment-${id}`}
                            label={
                              <div className="d-flex align-items-center">
                                {(id === "visa" || id === "paypal") && (
                                  <img
                                    src={`/images/checkbox-radio/${id === "visa" ? "logo1.png" : "logo3.png"}`}
                                    className="me-2 avatar-30"
                                    alt={id}
                                  />
                                )}
                                <div>
                                  <div className="fs-6 tab-heading">
                                    {{
                                      visa: "Visa Card",
                                      paypal: "PayPal",
                                      upi: "Other UPI Apps",
                                      cod: "Cash on Delivery/Pay on Delivery",
                                    }[id]}
                                  </div>
                                  <div className="text-secondary">
                                    {{
                                      visa: "Select Visa",
                                      paypal: "Select PayPal",
                                      upi: "Select Other UPI Apps for payment",
                                      cod: "Cash, UPI and Cards accepted.",
                                    }[id]}
                                  </div>
                                </div>
                              </div>
                            }
                            checked={selectedPayment === id}
                            onChange={() => handlePaymentSelect(id)}
                          />
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentTab === "tabs4" && (
                <Row>
                  {[...offerCards.filter(c => c.title !== "Other Offers"), ...offerCards.filter(c => c.title === "Other Offers")].map((card, idx) => (
                    <Col md={6} key={idx} className="mb-3">
                      <Card>
                        <Card.Body>
                          {card.ribbon && <div className="circle-ribbon circle-right ribbon-primary w-35 h-35">%</div>}
                          <h5 className="mb-2 text-muted">{card.title}</h5>
                          <p>{card.desc}</p>
                          <div className="text-end">
                            <a className="link-primary text-d-underline" href="#">More Offers</a>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}

                  <Col md={12}>
                    <ul className="list-group">
                      {offerList.map((offer) => (
                        <li key={offer.id} className="list-group-item">
                          <Form.Check
                            type="checkbox"
                            id={offer.id}
                            label={<>
                              <strong className="text-muted">{offer.title}</strong><br />
                              {offer.description}
                            </>}
                            checked={selectedOffers.includes(offer.id)}
                            onChange={() =>
                              setSelectedOffers((prev) =>
                                prev.includes(offer.id)
                                  ? prev.filter((o: string) => o !== offer.id)
                                  : [...prev, offer.id]
                              )
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </Col>

                  {showGiftWrap && (
                    <Col md={12}>
                      <div className="alert alert-light-border-success d-flex justify-content-between">
                        <p className="mb-0">
                          <Gift size={18} className="me-2" /> Gift wrap and personalized message on card, Only for $10.50 USD
                        </p>
                        <X size={18} onClick={() => setShowGiftWrap(false)} className="cursor-pointer" />
                      </div>
                    </Col>
                  )}
                </Row>
              )}
              {currentTab === "tabs5" && (
                <Row>
                  {cartItems.map((item) => (
                    <Col xs={6} sm={2} className="mb-3" key={item.id}>
                      <Card className="bg-light-dark b-r-10">
                        <img src={item.image} alt="product-img" className="img-fluid bg-light-dark b-r-10" />
                      </Card>
                    </Col>
                  ))}

                  <Col md={12} className="mb-3">
                    <h6 className="tab-heading mb-0">Estimated Delivery Date: 27 Dec 2024</h6>
                    <p className="text-secondary">Items dispatched by MQ Store</p>
                  </Col>

                  <Col xs={12}>
                    <h6 className="tab-heading">Product details</h6>
                    <Accordion defaultActiveKey="0" className="app-accordion accordion-secondary">
                      {cartItems.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={item.id}>
                          <Accordion.Header>{item.title}</Accordion.Header>
                          <Accordion.Body>
                            {item.size && <p><span className="text-secondary fw-semibold">Size</span>: {item.size}</p>}
                            <p><span className="text-secondary fw-semibold">Color</span>: {item.color}</p>
                            <p><span className="text-secondary fw-semibold">Items</span>: {item.items}</p>
                            <p><span className="text-secondary fw-semibold">Rating</span>: {item.rating}+</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Col>
                </Row>
              )}
              {currentTab === "tabs6" && (
                <Row>
                  <Col xs={12}>
                    <div className="text-center">
                      <div className="mb-3">
                        <img src="/images/form/done.gif" alt="" />
                      </div>
                      <h5 className="text-success">Your Order #7AD6728 Placed, Thank you!</h5>
                      <p>Confirmation will be sent to Your Email</p>
                    </div>
                    <div className="app-divider-v dashed"></div>
                  </Col>

                  <Col xs={12}>
                    <Row className="mb-3">
                      <Col md={12}>
                        <h6 className="tab-heading">
                          In the unlikely case of items being unavailable, what would you prefer?
                        </h6>
                      </Col>

                      {["Call Help Center for any substitutes", "Let us pick your substitutes", "I do not need any substitutes"].map((text, idx) => (
                        <Col md={6} xl={4} className="mt-4" key={idx}>
                          <Card className="shadow-none">
                            <Card.Body className="address-content">
                              <Form.Check
                                type="radio"
                                name="preference"
                                id={`select-${idx}`}
                                label={<span className="fs-6 tab-heading ms-2">Select {idx + 1}</span>}
                              />
                              <p className="mb-0">{text}</p>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              )}
            </div>
          </Col>
          
                <Col lg={4} xl={3}>
        <Card>
          <Card.Header>
            <h5>Order Details</h5>
          </Card.Header>
          <Card.Body>
            <div className="pricing-details">
              <div className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter promo code / Gift Certificate"
                  className="promo rounded-0"
                />
              </div>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">Subtotal</th>
                    <th scope="col" className="text-end">$2,550</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Estimated Tax</td>
                    <td className="text-end">$5.00</td>
                  </tr>
                  <tr>
                    <td>Estimated Shipping & Handling</td>
                    <td className="text-end">$10.00</td>
                  </tr>
                  <tr>
                    <td>Delivery Charges</td>
                    <td className="text-end">-</td>
                  </tr>
                  <tr>
                    <td className="border-0">Coupon Discount</td>
                    <td className="border-0 text-end">
                      <Badge bg="light-success" className="text-success">Apply</Badge>
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Total</th>
                    <th scope="col" className="text-end">$2000</th>
                  </tr>
                </thead>
              </Table>
              <Button variant="primary" className="w-100 mt-3" id="next">
                Buy Order
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Checkout;
