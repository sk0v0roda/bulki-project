import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import Auth from "../pages/Auth";

const Footer = () => {
    const {user} = useContext(Context)
    return (
        <div>
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