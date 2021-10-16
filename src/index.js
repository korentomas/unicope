import { Nav, Card, Button, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { ScrollView } from "@cantonjs/react-scroll-view";

import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <div>
      <ScrollView style={{ height: "100vh" }}>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Helmet>

        <div
          styles={{
            height: "10px",
            overflowY: "scroll",
            display: "none",
            whiteSpace: "nowrap"
          }}
        >
          <Container className="floating">
            <Row>
              <span className="title-empty">unicope</span>
            </Row>
            <Row>
              {" "}
              <Nav
                className="justify-content-center"
                activeKey="/home"
                sticky="top"
                id="nav"
              >
                <Nav.Item>
                  <Nav.Link href="" className="nav-links">
                    Inicio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="https://koren.empretienda.com.ar/"
                    target="_blank"
                    className="nav-links"
                  >
                    Tienda
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="" className="nav-links">
                    Contacto
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Container>

          <Card className="card" id="card-sponsors">
            <Card.Body>
              <Card.Title className="card-title">
                Estamos buscando sponsors
              </Card.Title>
              <Card.Text className="card-text">
                Queremos contar con tu empresa u organización para llevar a cabo
                nuestra visión.
              </Card.Text>
              <Button variant="primary" style={{ color: "white" }}>
                ¡Contáctanos!
              </Button>
            </Card.Body>
          </Card>
        </div>
      </ScrollView>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
