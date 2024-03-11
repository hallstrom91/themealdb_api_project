import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export default function RegisterContainer({ toggleLogin }) {
  //broken login function - ongoing project
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //broken login function - ongoing project
  const handleRegister = () => {
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
  };

  return (
    <>
      {/* Register Container Header */}
      <Card
        bg="dark"
        data-bs-theme="dark"
        className=" playfair-display-400 border-2"
      >
        <Card.Header className="text-center">
          <h3>Register</h3>
        </Card.Header>
        <Card.Body bg="light">
          {/* Register - Name*/}
          {/*           <FloatingLabel
            controlId="newName"
            label="Name"
            className="m-2 secondary"
          >
            <Form.Control type="text" placeholder="Name" />
          </FloatingLabel> */}
          {/* Register - Username */}
          <FloatingLabel
            controlId="newUser"
            label="Username"
            className="m-2 secondary"
          >
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>
          {/* Register - New Password */}
          <FloatingLabel
            controlId="newPassword"
            label="New Password"
            className="m-2 "
          >
            <Form.Control
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          {/* Register - Repeat New Password */}
          {/*      <FloatingLabel
            controlId="repeatPassword"
            label="Repeat Password "
            className="m-2 "
          >
            <Form.Control
              type="password"
              placeholder="New Password"
              className="border-2 success"
            />
          </FloatingLabel> */}
          {/* Submit Button  */}
          <div className="d-flex">
            <Button
              size="md"
              className="m-2"
              variant="success"
              onClick={handleRegister}
            >
              Register
            </Button>
          </div>
          {/* Footer - Go to Login (Btn) */}
          <Card.Footer className="d-flex justify-content-end">
            <Stack direction="horizontal">
              <Button
                size="md"
                className="m-2"
                variant="dark"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </Stack>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
