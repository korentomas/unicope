import { Nav, Card, Button, Container, Row } from "react-bootstrap";

import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <>
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
              <Nav.Link href="/home" className="nav-links">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="nav-links">
                Tienda
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="nav-links">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>

      <Card className="card">
        <Card.Body>
          <Card.Title>Estamos buscando sponsors</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">¡Comprar ahora!</Button>
        </Card.Body>
      </Card>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
