import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavigationMenu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { GiKnifeFork } from "react-icons/gi";

import SerachInput from "./SearchInput";

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        expanded={open}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className="NavText playfair-display-700">
              MealDB <GiKnifeFork size={30} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="responsiv-navbar"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="responsiv-navbar" onSelect={handleToggle}>
            <Nav className="me-auto ">
              <Link
                to="/"
                className="NavText playfair-display-400"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                to="/categorylist"
                className="NavText playfair-display-400"
                onClick={handleClick}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="NavText playfair-display-400"
                onClick={handleClick}
              >
                About
              </Link>
              <Link
                to="/login"
                className="NavText playfair-display-400"
                onClick={handleClick}
              >
                Login
              </Link>
            </Nav>

            <Nav className="pt-2 pb-2">
              <SerachInput />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
