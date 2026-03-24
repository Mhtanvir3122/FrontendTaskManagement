import { Container } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import "glightbox/dist/css/glightbox.min.css";

import GalleryLightbox from "@/components/apps/gallery/GalleryLightbox.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const GalleryPage = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Gallery"
          title="Apps"
          path={["Gallery"]}
          Icon={StackIcon}
        />
        <GalleryLightbox />
      </Container>
    </div>
  );
};

export default GalleryPage;
