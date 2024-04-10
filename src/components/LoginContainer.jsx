import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Button,
  FloatingLabel,
  Form,
  Stack,
  FormControl,
} from "react-bootstrap";
import "../css/InputElement.css";

export default function LoginContainer({ toggleRegister, onLoginSuccess }) {
  //login function connected to server.js in root-folder
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Login failed.");
      }
      onLoginSuccess();
    } catch (error) {
      setError(error.message);
      console.error("Error with login", error);
      setTimeout(() => setError(""), 5000);
    }
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="custom-input"
            />
          </FloatingLabel>

          {/* Password */}
          <FloatingLabel controlId="password" label="Password" className="m-2 ">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="custom-input"
            />
          </FloatingLabel>
          <div className="d-flex">
            <Button
              size="md"
              className="m-2"
              variant="success"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          {/* Error Message Display  */}
          <div className="d-flex">
            {error && <p className="text-danger text-center">{error}</p>}
          </div>

          {/* Footer - Go to Register (Btn) */}
          <Card.Footer className="d-flex justify-content-end">
            <Stack direction="horizontal">
              <Button
                size="md"
                className="m-2 custom-button"
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
