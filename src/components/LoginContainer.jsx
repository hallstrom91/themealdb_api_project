import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import FormControl from "react-bootstrap/FormControl";
import "../css/InputElement.css";

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
        <Card.Body data-bs-theme="light" className="text-black">
          {/* Username */}
          <FloatingLabel controlId="user" label="Username" className="m-2">
            {/* form control border-focus? fix? */}
            <Form.Control
              type="text"
              placeholder="Username"
              className="input"
            />
          </FloatingLabel>
          {/* Password */}
          <FloatingLabel controlId="password" label="Password" className="m-2 ">
            <Form.Control
              type="password"
              placeholder="Password"
              className="custom-input"
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
