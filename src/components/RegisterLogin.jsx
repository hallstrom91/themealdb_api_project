import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "../css/InputElement.css";

export default function RegisterContainer({ toggleLogin }) {
  //register function connected to server.js in root-folder
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //broken login function - ongoing project
  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }
      setUsername("");
      setPassword("");
      setSuccessMsg("Registration Successful.");
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (error) {
      setError(error.message || "Server error with registration.");
      console.error("trouble with login.");
      setTimeout(() => setError(""), 5000);
    }
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
        <Card.Body data-bs-theme="light" className="text-black">
          {/* Register - Name*/}
          {/*           <FloatingLabel
            controlId="newName"
            label="Name"
            className="m-2 secondary"
          >
            <Form.Control
              type="text"
              placeholder="Name"
              className="custom-input"
            />
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
              className="custom-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>
          {/* Register - New Password */}
          <FloatingLabel
            controlId="newPassword"
            label="New Password"
            className="m-2"
          >
            <Form.Control
              type="password"
              placeholder="New Password"
              className="custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          {/* Register - Repeat New Password */}
          {/*           <FloatingLabel
            controlId="repeatPassword"
            label="Repeat Password "
            className="m-2"
          >
            <Form.Control
              type="password"
              placeholder="New Password"
              className="custom-input"
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
          <div className="d-flex">
            {successMsg && <p className="text-success">{successMsg}</p>}
            {error && <p className="text-danger">Registration failed.</p>}
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
