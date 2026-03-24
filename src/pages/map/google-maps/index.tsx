import React, { useEffect, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MapPinLine } from "phosphor-react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import { createRoot } from "react-dom/client";

declare global {
  interface Window {
    google: typeof google;
  }
}

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const satelliteMapRef = useRef<HTMLDivElement | null>(null);
  const polygonMapRef = useRef<HTMLDivElement | null>(null);
  const fusionTableMapRef = useRef<HTMLDivElement | null>(null);
  const markerMapRef = useRef<HTMLDivElement | null>(null);
  const overlayMapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!document.getElementById("googleMaps")) {
        const script = document.createElement("script");
        script.src = "https://maps.google.com/maps/api/js";
        script.id = "googleMaps";
        script.async = true;
        script.onload = () => initMaps();
        document.body.appendChild(script);
      } else {
        initMaps();
      }
    };

    const initMaps = () => {
      const { google } = window;
      if (!google) return;

      // Terrain Map
      if (mapRef.current) {
        new google.maps.Map(mapRef.current, {
          center: { lat: -12.043333, lng: -77.028333 },
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
        });
      }

      // Satellite Map
      if (satelliteMapRef.current) {
        new google.maps.Map(satelliteMapRef.current, {
          center: { lat: -12.043333, lng: -77.028333 },
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
        });
      }

      // Polygon Map
      if (polygonMapRef.current) {
        const polygonMap = new google.maps.Map(polygonMapRef.current, {
          center: { lat: -12.043333, lng: -77.028333 },
          zoom: 12,
        });

        const path = [
          { lat: -12.040397656836609, lng: -77.03373871559225 },
          { lat: -12.040248585302038, lng: -77.03993927003302 },
          { lat: -12.050047116528843, lng: -77.02448169303511 },
          { lat: -12.044804866577001, lng: -77.02154422636042 },
        ];

        const polygon = new google.maps.Polygon({
          paths: path,
          strokeColor: "#BBD8E9",
          strokeOpacity: 1,
          strokeWeight: 3,
          fillColor: "#BBD8E9",
          fillOpacity: 0.6,
        });

        polygon.setMap(polygonMap);
      }

      // Fusion Table Map (GeoJSON)
      if (fusionTableMapRef.current) {
        const fusionMap = new google.maps.Map(fusionTableMapRef.current, {
          center: { lat: 37.0902, lng: -95.7129 },
          zoom: 4,
        });

        fusionMap.data.loadGeoJson(
          "https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json"
        );

        fusionMap.data.setStyle({
          fillColor: "#BBD8E9",
          fillOpacity: 0.6,
          strokeWeight: 1,
        });
      }

      // Marker Map
      if (markerMapRef.current) {
        const markerMap = new google.maps.Map(markerMapRef.current, {
          center: { lat: -12.043333, lng: -77.028333 },
          zoom: 12,
        });

        new google.maps.Marker({
          position: { lat: -12.043333, lng: -77.028333 },
          map: markerMap,
          title: "Gmap",
        });
      }

      // Overlay Map (React Portal)
      if (overlayMapRef.current) {
        const overlayMap = new google.maps.Map(overlayMapRef.current, {
          center: { lat: -12.043333, lng: -77.028333 },
          zoom: 12,
        });

        const overlay = new google.maps.OverlayView();
        overlay.onAdd = function () {
          const panes = this.getPanes();
          if (!panes || !panes.overlayLayer) return;

          const container = document.createElement("div");
          panes.overlayLayer.appendChild(container);

          createRoot(container).render(
            <div className="map-overlay">
              Map
              <div className="overlay-arrow above"></div>
            </div>
          );
        };

        overlay.draw = function () {};
        overlay.setMap(overlayMap);
      }
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Google Map"
          title="Maps"
          path={["Google Map"]}
          Icon={MapPinLine}
        />
      </Container>

      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Terrain Type Map</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={mapRef} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Satellite Type Map</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={satelliteMapRef} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Polygons</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={polygonMapRef} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Fusion Table Layers</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={fusionTableMapRef} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Markers Map</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={markerMapRef} />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Overlay Map</h5>
            </Card.Header>
            <Card.Body>
              <div className="w-100 h-400 rounded" ref={overlayMapRef} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default GoogleMap;
