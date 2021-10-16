import { Nav, Card, Button, Container, Row } from "react-bootstrap";

import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <div styles={{ height: "10px", overflowY: "scroll" }}>
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

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
