import React from "react";
import "../css/NavigationMenu.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GiKnifeFork } from "react-icons/gi";

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
          <Navbar.Brand href="#" className="NavText">
            MealDB <GiKnifeFork size={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsiv-navbar" />
          <Navbar.Collapse id="responsiv-navbar">
            <Nav className="me-auto ">
              <Nav.Link href="#" className="NavText">
                Hem
              </Nav.Link>
              <Nav.Link href="#" className="NavText">
                Kategorier
              </Nav.Link>
              <Nav.Link href="#" className="NavText">
                Om Oss
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="NavText">
                Logga In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

/* nav justify-content-end flex-grow-1 pe-3 */
