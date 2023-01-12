import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import Navigation from "../components/Navigation";
import Nav2 from "../components/Nav2";
function Chat() {
    return (
        <Container>
        <Navigation/>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;
