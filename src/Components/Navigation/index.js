import React from "react"
import { Nav, Navbar } from "react-bootstrap"

import "./Navigation.css"

const Navigation = () => {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        document.getElementsByClassName("navbar")[0].classList.add("shadow")
      } else {
        document.getElementsByClassName("navbar")[0].classList.remove("shadow")
      }
    })
  }, [])

  return (
    <Navbar bg="white" variant="light" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="/">Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="/#home">Home</Nav.Link>
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
