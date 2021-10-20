import React, {useContext, useState} from 'react'
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'
import { Context } from './Context'

const Header = () => {

    const {username, setUsername} = useContext(Context)
    const [search, setSearch] = useState('')


    const handleSubmit = (e) => {
        setUsername(search)
    }

    const updateInput = (e) => {
        setSearch(e.target.value)
    }

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
        onChange = {updateInput}
      />
      <Button onClick = {handleSubmit} variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
