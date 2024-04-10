import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import LoginContainer from "../components/LoginContainer";
import RegisterContainer from "../components/RegisterLogin";

import UserPage from "./UserPage";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsRegister((prevMode) => !prevMode);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Container className="p-4">
        <Row className="d-flex justify-content-center">
          {/* User Login Container */}
          <Col sm={6} md={4}>
            {isLoggedIn ? (
              <UserPage onLogout={handleLogout} />
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
