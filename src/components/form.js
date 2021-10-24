import React from "react";
import { Form, Button } from "react-bootstrap";

class BasicForm extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ fontSize: "1.2em" }}>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label style={{ fontSize: "1.2em" }}>Asunto</Form.Label>
          <Form.Control type="text" placeholder="Asunto" />
          <Form.Label style={{ fontSize: "1.2em" }}>Mensaje</Form.Label>
          <Form.Control placeholder="Mensaje" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" style={{ color: "white" }} type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export { BasicForm };
