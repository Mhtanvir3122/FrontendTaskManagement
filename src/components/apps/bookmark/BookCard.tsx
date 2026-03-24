import React from "react";
import { Card, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";

import {
  DotsThreeVertical,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MessengerLogo,
  PenNib,
  ShareNetwork,
  Star,
  Trash,
  WhatsappLogo,
} from "phosphor-react";

interface Bookmark {
  id: number;
  title: string;
  url: string;
  image: string;
  isFavourite?: boolean;
  isShared?: boolean;
  isStarred?: boolean;
  isDelete?: boolean;
}

interface BookCardProps {
  bookmark: Bookmark;
  onDelete: (id: number) => void;
  onFavouriteToggle: (id: number) => void;
  onShareToggle?: (id: number) => void;
  onStarToggle?: (id: number) => void;
  onEdit?: (bookmark: Bookmark) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  bookmark,
  onDelete,
  onFavouriteToggle,
  onShareToggle,
  onStarToggle,
  onEdit,
}) => {
  return (
    <Card className="book-mark-card">
      <Card.Body>
        <div className="draggable-card-img">
          <img
            src={bookmark?.image}
            alt={bookmark?.title}
            className="h-225 img-fluid"
          />
          <div className="video-transparent-box" />
          <div className="draggable-card-icon">
            <div
              className="bg-white h-35 w-35 d-flex-center b-r-50 me-3 heartBtn mb-2"
              onClick={() => onFavouriteToggle(bookmark?.id)}
            >
              <Heart
                size={18}
                weight={bookmark?.isFavourite ? "fill" : "bold"}
                className="text-danger f-s-18"
              />
            </div>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={`share-tooltip-${bookmark.id}`}>
                  <div className="d-flex justify-content-around py-2">
                    <WhatsappLogo size={18} className="text-primary ms-2" />
                    <InstagramLogo size={18} className="text-success ms-2" />
                    <FacebookLogo size={18} className="text-info ms-2" />
                    <MessengerLogo size={18} className="text-danger ms-2" />
                  </div>
                </Tooltip>
              }
            >
              <div
                className="bg-white h-35 w-35 d-flex-center b-r-50 me-3 shareBtn mb-2"
                onClick={() => onShareToggle?.(bookmark.id)}
              >
                <ShareNetwork size={18} className="f-s-18 text-primary" />
              </div>
            </OverlayTrigger>

            <div
              className="bg-white h-35 w-35 d-flex-center b-r-50 me-3 starBtn mb-2"
              onClick={() => onStarToggle?.(bookmark.id)}
            >
              <Star
                size={18}
                weight={bookmark.isStarred ? "fill" : "bold"}
                className="text-warning f-s-18"
              />
            </div>
          </div>

          <Dropdown className="dropdown-icon-none action-icon">
            <Dropdown.Toggle
              as="div"
              className="cursor-pointer btn-white btn-icon b-r-4"
              id={`dropdown-${bookmark.id}`}
            >
              <DotsThreeVertical size={20} weight="bold" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              <Dropdown.Item
                as="button"
                className="text-success"
                onClick={() => onEdit?.(bookmark)}
              >
                <PenNib className="f-s-18 text-success me-2" />
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                className="text-danger deletbtn"
                onClick={() => onDelete(bookmark.id)}
              >
                <Trash className="f-s-18 text-danger me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="draggable-card-content pt-4">
          <h5 className="mb-2">{bookmark.title}</h5>
          <p>{bookmark.url}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
