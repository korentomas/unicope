import { Nav, Container, Row } from "react-bootstrap";
import React from "react";

class NavigationBar extends React.Component {
  render() {
    return (
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
              <Nav.Link href="/contacto" className="nav-links">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    );
  }
}

export { NavigationBar };
