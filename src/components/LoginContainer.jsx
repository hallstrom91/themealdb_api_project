import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export default function LoginContainer({ toggleRegister }) {
  return (
    <>
      {/* Login Container Header */}
      <Card
        bg="dark"
        data-bs-theme="dark"
        className="playfair-display-400 border-2"
      >
        <Card.Header className="text-center ">
          <h3>Login</h3>
        </Card.Header>
        <Card.Body bg="light">
          {/* Username */}
          <FloatingLabel
            controlId="user"
            label="Username"
            bg="light"
            className="m-2 secondary"
          >
            <Form.Control type="user" placeholder="Username" />
          </FloatingLabel>
          {/* Password */}
          <FloatingLabel controlId="password" label="Password" className="m-2 ">
            <Form.Control
              type="password"
              placeholder="Password"
              className="border-2 success"
            />
          </FloatingLabel>
          <div className="d-flex">
            <Button size="md" className="m-2" variant="success">
              Login
            </Button>
          </div>
          {/* Footer - Go to Register (Btn) */}
          <Card.Footer className="d-flex justify-content-end">
            <Stack direction="horizontal">
              <Button
                size="md"
                className="m-2"
                variant="dark"
                onClick={toggleRegister}
              >
                Register
              </Button>
            </Stack>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
