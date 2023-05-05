import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import YandexMap from "./YandexMap";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div
        style={{ width: "100%", marginTop: "10px"}}
        >
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Nav className="ml-auto" style={{color: 'white', position: 'absolute', bottom: 0, left: 0}}>
                        <h5 style={{cursor: "pointer"}} onClick={() => navigate(LOGIN_ROUTE)}>Вход администратора</h5>
                    </Nav>
                    <div className="text-light">
                        <h5>Наши контакты:</h5>
                        <ul>
                            <li>Александра, директор: +79999999999</li>
                            <li>Алексей, заместитель директора: +78118135139</li>
                        </ul>
                    </div>
                    <div className="text-light">
                        <h5>Адреса:</h5>
                        <ul>
                            <li>Улица Урицкого, д. 15</li>
                        </ul>
                    </div>
                    <YandexMap />
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;