import React from "react";
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
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#" className="NavText playfair-display-700">
            MealDB <GiKnifeFork size={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsiv-navbar" />
          <Navbar.Collapse id="responsiv-navbar">
            <Nav className="me-auto ">
              <Link to="/" className="NavText playfair-display-400">
                Home
              </Link>
              <Link to="/categorylist" className="NavText playfair-display-400">
                Categories
              </Link>
              <Link to="/about" className="NavText playfair-display-400">
                About
              </Link>
              <Link to="/login" className="NavText playfair-display-400">
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

/* nav justify-content-end flex-grow-1 pe-3 */
