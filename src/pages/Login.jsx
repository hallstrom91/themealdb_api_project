import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Container>
        <Row className="d-flex justify-content-center">
          {/* User Login Container */}
          <Col sm={6} md={4} className="">
            {/* Username */}
            <FloatingLabel
              controlId="floatingInputUser"
              label="Username"
              className="m-2"
            >
              <Form.Control type="user" placeholder="Username" />
            </FloatingLabel>
            {/* Password */}
            <FloatingLabel
              controlId="floatingInputPassword"
              label="Password"
              className="m-2 "
            >
              <Form.Control
                type="password"
                placeholder="Password"
                className="border-2 border-black"
              />
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
