import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import LoginContainer from "../components/LoginContainer";
import RegisterContainer from "../components/RegisterLogin";

import UserPage from "./UserPage";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameDisplay, setUsernameDisplay] = useState("");

  const handleToggle = () => {
    setIsRegister((prevMode) => !prevMode);
  };

  const handleLoginSuccess = (usernameDisplay) => {
    setIsLoggedIn(true);
    setUsernameDisplay(usernameDisplay);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <>
      <Container className="p-4">
        <Row className="d-flex justify-content-center">
          {/* User Login Container */}
          <Col sm={6} md={4} className="">
            {isLoggedIn ? (
              <UserPage username={username} onLogout={handleLogout} />
            ) : isRegister ? (
              <RegisterContainer toggleLogin={handleToggle} />
            ) : (
              <LoginContainer
                toggleRegister={handleToggle}
                onLoginSuccess={handleLoginSuccess}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
