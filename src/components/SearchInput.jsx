import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

export default function SerachInput({ findSearch, toggleClose }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const newSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchInput}`);
    /* Clear searchInput Field after submit */
    setSearchInput("");
  };

  return (
    <>
      <Container className="playfair-display-400">
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            id="Search"
            placeholder="Beef, Chicken, Cake..."
            value={searchInput}
            onChange={newSearch}
            className="me-2"
            size="sm"
            aria-label="Search"
          />
          <Button
            variant="outline-success"
            size="sm"
            type="submit"
            onClick={toggleClose}
          >
            Search
          </Button>
        </Form>
      </Container>
    </>
  );
}
