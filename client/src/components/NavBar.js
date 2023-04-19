import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="m-lg-auto" style={{color: 'white'}} to={MAIN_PAGE_ROUTE}>БуLки</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button ClassName="m-lg-2" variant={"outline-light"}>Админ-панель</Button>
                            <Button onClick={() => user.setIsAuth(false)} className="m-lg-2" variant={"outline-light"}>Выйти</Button>
                        </Nav> :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;