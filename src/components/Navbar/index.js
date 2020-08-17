import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function NavbarComp() {
  return (
    <Navbar
      className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top"
      expand="lg"
    >
      <Navbar.Brand href="#home">Steve Munoz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">About Me</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Skills</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
