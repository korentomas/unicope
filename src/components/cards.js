import { Card, Button, Row } from "react-bootstrap";
import telescopio_pic from "../assets/telescopio.jpeg";
import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <Row className="linear-wipe">
        per aspera ad astra
      </Row>
    );
  }
}

class SponsorCard extends React.Component {
  render() {
    return (
      <Card className="card" id="card-sponsors">
        <Card.Body>
          <Card.Title className="card-title">
            Estamos buscando sponsors
          </Card.Title>
          <Card.Text className="card-text">
            Queremos contar con tu empresa u organización para llevar a cabo
            nuestra visión.
          </Card.Text>
          <Button variant="primary" style={{ color: "white" }} href="/contacto">
            ¡Contáctanos!
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

class ImgCard extends React.Component {
  render() {
    return (
      <Card id="card-buy">
        <Card.Body>
          <Card.Title>Fabricamos telescopios de bajo costo</Card.Title>
          <Card.Text>Ya podes conseguir el tuyo!</Card.Text>
          <Button
            variant="primary"
            style={{ color: "white" }}
            href="https://koren.empretienda.com.ar/"
            target="_blank"
          >
            ¡Comprar!
          </Button>
        </Card.Body>
        <Card.Img
          variant="bottom"
          style={{ height: "auto", width: "100%" }}
          src={telescopio_pic}
        />
      </Card>
    );
  }
}

export { Banner, ImgCard, SponsorCard };
