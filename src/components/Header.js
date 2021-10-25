import React from 'react'
import { Navbar,Container ,Nav} from 'react-bootstrap';
import { Link} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/"  className="nav-item">  <Link to="/">Login</Link></Nav.Link>
              <Nav.Link to="/addTodo"  className="nav-item">  <Link to="/addTodo">AddTodo</Link></Nav.Link>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
