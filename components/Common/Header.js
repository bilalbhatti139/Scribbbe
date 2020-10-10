import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img src="../../static/assets/images/logo.svg" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className="nav-items">
            Transcription
          </Nav.Link>
          <Nav.Link href="#" className="nav-items">
            Buy Credits
          </Nav.Link>
          <Nav.Link href="#" className="nav-items">
            <img src="../../static/assets/images/user.svg" alt="user" />{" "}
            Joachimgllt@gmail.com
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
