import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <>
       
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorate">Favorate</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        
      </>
    );
  }
}

export default Header;
