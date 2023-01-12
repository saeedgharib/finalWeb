import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import { Link,useNavigate } from "react-router-dom";
import { initialState } from "../features/userSlice";

function Navigation() {
    const navigate=useNavigate();
    const user = useSelector((state)=>state.user); 
    // => initialState.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        navigate('/Nav2');
        //  user = useSelector(initialState);
       await logoutUser(user);
    user=initialState;
        

        window.location.replace("/");
    }
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
                        {!user && (
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        {user && (
                            <NavDropdown
                                title={
                                    <>
                                        <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                        {user.name}
                                    </>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item ><Link to="/Admin">Admin Panel</Link></NavDropdown.Item>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
