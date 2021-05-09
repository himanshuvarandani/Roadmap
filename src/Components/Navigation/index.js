import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#services">Services</Nav.Link>
            <Nav.Link href="/#contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
