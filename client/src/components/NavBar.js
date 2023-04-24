import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, MAIN_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink className="m-lg-auto" style={{color: 'white'}} to={MAIN_PAGE_ROUTE}>БуLки</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button className="m-lg-2" variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                            >Админ-панель</Button>
                            <Button onClick={() => {
                                logout()
                                navigate(MAIN_PAGE_ROUTE)
                            }} className="m-lg-2" variant={"outline-light"}>Выйти</Button>
                        </Nav> :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;