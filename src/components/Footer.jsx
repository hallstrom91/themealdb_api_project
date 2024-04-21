import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../css/Footer.css";
import { GiKnifeFork } from "react-icons/gi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-body">
        <Navbar bg="dark" data-bs-theme="dark">
          <NavbarBrand className="mx-auto footer-text">
            <p>
              {year} &copy; MealRadar <GiKnifeFork size={30} />
            </p>
            <p>kjsportfolio.se</p>
          </NavbarBrand>
        </Navbar>
      </div>
    </>
  );
}
