import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {login} from "../http/userAPI";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const click = async () => {
        try {
            let data
            data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_PAGE_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        className="mt-3 align-self-center s"
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Войти
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;