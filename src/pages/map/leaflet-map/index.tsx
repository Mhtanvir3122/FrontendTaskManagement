import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPinLine } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const LeafletMapPage: React.FC = () => {
  useEffect(() => {
    const initializeMap = (
      id: string,
      options: L.MapOptions,
      callback?: (map: L.Map) => void
    ) => {
      const mapContainer = document.getElementById(id) as HTMLElement | null;
      if (mapContainer && !("_leaflet_id" in mapContainer)) {
        const map = L.map(id, options);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(map);
        if (callback) callback(map);
      }
    };

    initializeMap("mobilemap", { center: [0, 0], zoom: 2 });
    initializeMap(
      "accessiblemap",
      { center: [51.505, -0.09], zoom: 13 },
      (map) => {
        L.marker([51.5, -0.09])
          .bindPopup("<b>Hello!</b><br>I am a popup.")
          .addTo(map);
        L.circle([51.508, -0.1], {
          fillColor: "#467FFB",
          fillOpacity: 0.6,
          radius: 500,
        })
          .bindPopup("This is a circle.")
          .addTo(map);
      }
    );
    initializeMap(
      "markersmap",
      { center: [50.4501, 30.5234], zoom: 4 },
      (map) => {
        L.marker([50.4501, 30.5234])
          .bindPopup("Kyiv, Ukraine is the birthplace of Leaflet!")
          .addTo(map);
      }
    );
    initializeMap("interactivemap", { center: [37.8, -96], zoom: 4 });
    initializeMap(
      "customiconsmap",
      { center: [51.5, -0.09], zoom: 13 },
      (map) => {
        const greenIcon = new L.Icon({
          iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
          shadowUrl:
            "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
          iconSize: [38, 95],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76],
        });

        const redIcon = new L.Icon({
          iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
          shadowUrl:
            "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
          iconSize: [38, 95],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76],
        });

        L.marker([51.5, -0.09], { icon: greenIcon })
          .bindPopup("I am green.")
          .addTo(map);
        L.marker([51.495, -0.083], { icon: redIcon })
          .bindPopup("I am red.")
          .addTo(map);
      }
    );
    initializeMap("layersmap", { center: [-29.5, 145], zoom: 3.5 }, (map) => {
      const basemaps = {
        StreetView: L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ),
        Topography: L.tileLayer.wms(
          "http://ows.mundialis.de/services/service?",
          {
            layers: "TOPO-WMS",
          }
        ),
      };
      L.control.layers(basemaps).addTo(map);
      basemaps.StreetView.addTo(map);
    });
  }, []);
  const mapDetails = [
    { id: "mobilemap", title: "Leaflet on Mobile Map" },
    { id: "accessiblemap", title: "Markers, Circles and Polygons" },
    { id: "markersmap", title: "Accessible Maps" },
    { id: "interactivemap", title: "Interactive Choropleth Map" },
    { id: "customiconsmap", title: "Markers with Custom Icons" },
    { id: "layersmap", title: "Layer Groups and Layers Control" },
  ];
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Leaflet Map"
        title="Map"
        path={["Leaflet Map"]}
        Icon={MapPinLine}
      />
      <Row>
        {mapDetails.map(({ id, title }) => (
          <Col lg="6" key={id}>
            <Card>
              <Card.Header>
                <h5>{title}</h5>
              </Card.Header>
              <Card.Body>
                <div id={id} className="w-100 h-280px"></div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LeafletMapPage;
