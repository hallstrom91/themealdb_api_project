import React from "react";
import "../css/Footer.css";
import { GiKnifeFork } from "react-icons/gi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-body">
        <Navbar bg="dark" data-bs-theme="dark">
          <NavbarBrand className="mx-auto footer-text">
            <p>
              {year} &copy; MealDB <GiKnifeFork size={30} />
            </p>
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  );
}
