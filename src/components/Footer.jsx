import React from "react";
import "../css/Footer.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function Footer() {
  const year = new Date().getFullYear();
  const DB_API = "The Meal DB API";
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <NavbarBrand className="mx-auto FooterText">
          {year} &copy; MealDB{" "}
        </NavbarBrand>
        <NavbarBrand className="mx-auto FooterText">
          Thanks To: {DB_API}
        </NavbarBrand>
      </Navbar>
    </>
  );
}
