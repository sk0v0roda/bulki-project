import React, {useContext, useEffect} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import ItemList from "../components/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchItems} from "../http/itemAPI";
import {LOGIN_ROUTE} from "../utils/consts";
import YandexMap from "../components/YandexMap";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";

const MainPage = observer(() => {
    const {item} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        fetchItems().then(data => item.setItems(data))
    })

    return (
        <div>
            <Container>
                <Row>
                    <Col md={1}>

                    </Col>
                    <Col md={12}>
                        <ItemList/>
                    </Col>
                    <Col md={1}>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
});

export default MainPage;