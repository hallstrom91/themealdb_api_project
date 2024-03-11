import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import LoginContainer from "../components/LoginContainer";
import RegisterContainer from "../components/RegisterLogin";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister((prevMode) => !prevMode);
  };

  return (
    <>
      <Container className="p-4">
        <Row className="d-flex justify-content-center">
          {/* User Login Container */}
          <Col sm={6} md={4} className="">
            {isRegister ? (
              <RegisterContainer toggleLogin={handleToggle} />
            ) : (
              <LoginContainer toggleRegister={handleToggle} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
