import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function UserPage({ onLogout }) {
  return (
    <>
      <Container className="p-4">
        <h1>Welcome</h1>
        <button size="md" variant="danger" onClick={onLogout}>
          Logout
        </button>
      </Container>
    </>
  );
}
