import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ItemList from "../components/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchItems} from "../http/itemAPI";

const MainPage = observer(() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchItems().then(data => item.setItems(data))
    })

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
});

export default MainPage;