import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ItemList from "../components/ItemList";

const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col md={1}>

                </Col>
                <Col md={12}>
                    <ItemList />
                </Col>
                <Col md={1}>

                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;