import React from "react";
import { Badge, Col } from "react-bootstrap";

import {
  recentPurchases,
  topBrands,
} from "@/data/dashboard/ecommerce/SalesCardsData.ts";

import SaleOfferCard from "@/components/widget/SaleOfferCard.tsx";
import TotalEarningCard from "@/components/widget/TotalEarningCard.tsx";

const SalesCards: React.FC = () => {
  return (
    <>
      {/* Earning Card */}
      <Col sm={5} lg={4} xxl={3}>
        <TotalEarningCard />
      </Col>

      {/* Recent Purchases */}
      <Col sm={6} lg={4} xxl={3}>
        <ul className="box-list mb-4">
          <li className="b-s-4-primary">
            <h5>Recent Purchases</h5>
          </li>
          {recentPurchases.map((item) => (
            <li
              key={item.id}
              className="d-flex align-items-center justify-between gap-2"
            >
              <div className="b-1-light bg-primary-200 p-1 h-40 w-40 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
                <img alt={item.name} className="img-fluid" src={item.image} />
              </div>
              <div className="mg-s-45 flex-grow-1">
                <h6 className="mb-0 text-dark-800 f-w-500 txt-ellipsis-1">
                  {item.name}
                </h6>
                <p className="text-secondary-800 mb-0">{item.brand}</p>
              </div>
              <Badge bg="light-primary">{item.price}</Badge>
            </li>
          ))}
        </ul>
      </Col>

      {/* Top Brands */}
      <Col sm={6} lg={4} xxl={3}>
        <ul className="list-box top-brand-list mb-4">
          <li className="b-s-4-primary">
            <h5>Top Brands</h5>
          </li>
          {topBrands.map((brand) => (
            <li key={brand.id} className="d-flex align-items-center">
              <div className="b-1-light bg-primary-200 p-1 h-40 w-40 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
                <img alt={brand.name} className="img-fluid" src={brand.image} />
              </div>
              <div className="flex-grow-1 mg-s-45">
                <h6 className="mb-0 f-w-500 text-dark-800 txt-ellipsis-1">
                  {brand.name}
                </h6>
                <p className="text-secondary-800 mb-0">{brand.category}</p>
              </div>
              <div className="text-end">
                <Badge bg={brand.ratingColor}>{brand.rating}</Badge>
              </div>
            </li>
          ))}
        </ul>
      </Col>

      {/* Offer Card */}
      <Col sm={6} lg={4} xxl={3}>
        <SaleOfferCard />
      </Col>
    </>
  );
};

export default SalesCards;
