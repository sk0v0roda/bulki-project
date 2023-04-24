import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Footer = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <div
        style={{position: "fixed", bottom: 0, width: "100%" }}
        >
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Вход администратора</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;