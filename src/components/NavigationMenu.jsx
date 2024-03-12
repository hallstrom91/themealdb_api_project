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
        <Container className="playfair-display-400">
          <Link to="/">
            <Navbar.Brand className="p-2 text-white playfair-display-700">
              MealDB <GiKnifeFork size={30} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="responsiv-navbar"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="responsiv-navbar" onSelect={handleToggle}>
            <Nav className="me-auto ">
              <Link to="/" className="p-2 text-white " onClick={handleClick}>
                Home
              </Link>
              <Link
                to="/categorylist"
                className="p-2 text-white"
                onClick={handleClick}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="p-2 text-white"
                onClick={handleClick}
              >
                About
              </Link>
              <Link
                to="/login"
                className="p-2 text-white"
                onClick={handleClick}
              >
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="m-2 p-2">
            <SerachInput toggleClose={handleClick} />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
