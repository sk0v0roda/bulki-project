import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";

const Footer = () => {
    const {user} = useContext(Context)
    return (
        <div
        style={{position: "fixed", bottom: 0, width: "100%" }}
        >
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button onClick={() => user.setIsAuth(true)}>Вход администратора</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;