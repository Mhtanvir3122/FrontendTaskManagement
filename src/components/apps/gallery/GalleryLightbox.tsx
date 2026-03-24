import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "glightbox/dist/css/glightbox.min.css";

interface GalleryItem {
  src: string;
  glightbox: string;
  caption: string;
  cols?: {
    xs?: number;
    sm?: number;
    lg?: number;
  };
}

const GalleryLayout: React.FC = () => {
  const img = (src: string) => `/images/gallary/${src}`;

  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;

    import("glightbox").then((mod) => {
      lightbox = mod.default({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        zoomable: true,
        autoplayVideos: true,
      });
    });

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  const galleryItems = [
    {
      cols: { sm: 6, lg: 4 },
      items: [
        {
          src: "01.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Simple Image",
        },
        {
          src: "02.jpg",
          glightbox:
            "title:Description Bottom; description: You can set the position of the description",
          caption: "Image With Bottom Description",
        },
      ],
    },
    // Nested grid items (4 small images)
    {
      cols: { lg: 4 },
      nested: true,
      items: [
        {
          cols: { xs: 6, sm: 3, lg: 6 },
          src: "03.jpg",
          glightbox:
            "title:Description Right; description: You can set the position of the description ;descPosition: right;",
          caption: "Image With Right Description",
        },
        {
          cols: { xs: 6, sm: 3, lg: 6 },
          src: "04.jpg",
          glightbox:
            "title: Description Left;  description: You can set the position of the description; descPosition: left;",
          caption: "Image With Right Description",
        },
        {
          cols: { xs: 6, sm: 3, lg: 6 },
          src: "05.jpg",
          glightbox:
            "title: Description Left;  description: You can set the position of the description; descPosition: top;",
          caption: "Image With Top Description",
        },
        {
          cols: { xs: 6, sm: 3, lg: 6 },
          src: "06.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Simple Image",
        },
      ],
    },
    // Complex nested grid (6 items)
    {
      cols: { lg: 6 },
      nested: true,
      items: [
        {
          cols: { xs: 6, lg: 4 },
          src: "07.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Image With Right Description",
        },
        {
          cols: { xs: 6, lg: 4 },
          src: "08.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Image With Right Description",
        },
        {
          cols: { xs: 6, lg: 4 },
          src: "14.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Image With Right Description",
        },
        {
          cols: { lg: 6 },
          src: "10.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Image With Right Description",
        },
        {
          cols: { lg: 6 },
          src: "11.jpg",
          glightbox: "type: image; zoomable: true;",
          caption: "Image With Right Description",
        },
      ],
    },
    // Individual items
    {
      cols: { xs: 6, lg: 3 },
      src: "16.jpg",
      glightbox: "type: image; zoomable: true;",
      caption: "Image With Right Description",
    },
    {
      cols: { xs: 6, lg: 3 },
      src: "12.jpg",
      glightbox: "type: image; zoomable: true;",
      caption: "Image With Right Description",
    },
    {
      cols: { sm: 6, lg: 4 },
      src: "15.jpg",
      glightbox: "type: image; zoomable: true;",
      caption: "Image With Right Description",
    },
    {
      cols: { sm: 6, lg: 4 },
      src: "13.jpg",
      glightbox: "type: image; zoomable: true;",
      caption: "Image With Right Description",
    },
    {
      cols: { sm: 6, lg: 4 },
      src: "09.jpg",
      glightbox: "type: image; zoomable: true;",
      caption: "Image With Right Description",
    },
  ];

  const renderImageBox = (item: GalleryItem, index: number) => (
    <div className="imagebox" key={index}>
      <a
        className="glightbox"
        data-glightbox={item.glightbox}
        href={img(item.src)}
      >
        <img alt="image" className="img-fluid" src={img(item.src)} />
      </a>
      <div className="caption-content">
        <p>{item.caption}</p>
      </div>
    </div>
  );

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="gallery-grid-container">
          <Row className="gallery-img">
            {galleryItems.map((section, sectionIndex) => {
              if (section.nested) {
                return (
                  <Col {...section.cols} key={sectionIndex}>
                    <Row>
                      {section.items.map((item, itemIndex) => (
                        <Col {...item.cols} key={itemIndex}>
                          {renderImageBox(item, itemIndex)}
                        </Col>
                      ))}
                    </Row>
                  </Col>
                );
              }

              if (section.items) {
                return section.items.map((item, itemIndex) => (
                  <Col {...section.cols} key={`${sectionIndex}-${itemIndex}`}>
                    {renderImageBox(item, itemIndex)}
                  </Col>
                ));
              }

              return (
                <Col {...section.cols} key={sectionIndex}>
                  {/* {renderImageBox(section, sectionIndex)} */}
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryLayout;
