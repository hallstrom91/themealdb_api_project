import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export default function SerachInput() {
  return (
    <>
      <Container>
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            size="sm"
            aria-label="Search"
          />
          <Button variant="outline-success" size="sm">
            Search
          </Button>
        </Form>
      </Container>
    </>
  );
}
