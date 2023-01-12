import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import Navigation from "../components/Navigation";
import Nav2 from "../components/Nav2";
function Home() {
    return (
        <Row>
        <Nav2/>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h1>SAnonchat</h1>
                    <p>A Chat app developed by Muhammad Saeed in order to learn React</p>
                    
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
        </Row>
    );
}

export default Home;
