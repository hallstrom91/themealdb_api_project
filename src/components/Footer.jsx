import React from "react";
import "../css/Footer.css";
import { GiKnifeFork } from "react-icons/gi";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function Footer() {
  const year = new Date().getFullYear();
  const DB_API = "The Meal DB API";
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
