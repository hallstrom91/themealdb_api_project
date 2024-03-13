import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function UserPage({ usernameDisplay, onLogout }) {
  console.log(usernameDisplay);
  return (
    <>
      <Container className="p-4">
        <h1>Welcome {usernameDisplay}</h1>
        <button size="md" variant="danger" onClick={onLogout}>
          Logout
        </button>
      </Container>
    </>
  );
}
