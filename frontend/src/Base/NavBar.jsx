import React from 'react'
import {Nav,Navbar,Container,} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href='/readAll'>Read All</Nav.Link>
          <Nav.Link href='/Contact'>Contact</Nav.Link>
          <Nav.Link href='/readOne'>Read One</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar