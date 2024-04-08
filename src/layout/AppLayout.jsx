import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AppLayout.style.css";
<img src="/img/imgfile.png" />;

const AppLayout = () => {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="logo"
              src="https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-list">Home</Nav.Link>
              <Nav.Link className="nav-list">Movies</Nav.Link>
              <Nav.Link href="/tvs" className="nav-list">TVs</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
