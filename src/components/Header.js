import React from 'react'
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className = "navmargin">
  <Navbar.Brand href="#">Github Spy</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
