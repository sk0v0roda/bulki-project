import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ItemList from "../components/ItemList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchItems} from "../http/itemAPI";
import Footer from "../components/Footer";
import Pages from "../components/Pages";

const MainPage = observer(() => {
    const {item} = useContext(Context)

    useEffect(() => {
        fetchItems(1, 8).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchItems(item.page, 8).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page])

    return (
        <div>
            <Container>
                <Row>
                    <Col md={1}>

                    </Col>
                    <Col md={12}>
                        <ItemList/>
                        <Pages />
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