import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer,useNavigate } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Nav2() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        {/* <img src={logo} style={{ width: 50, height: 50 }} /> */}
                        <h1 style={{fontWeight:"bolder",marginLeft:"240px"}}>AnonChat</h1>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                       
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav2;
