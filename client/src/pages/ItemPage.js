import React from 'react';
import {Col, Container, Form, Image, Row} from "react-bootstrap";

const ItemPage = () => {
    const item = {
        id: 1,
        name: "Булка вкусная",
        price: 150,
        description: "РЕАЛЬНО ВКУСНЕЙШАЯ булка ПОКУПАЙТЕ",
        img: `http://mobimg.b-cdn.net/v3/fetch/77/773125d50028b87fc8dd7a310c685a07.jpeg`
    }
    return (
        <Container className="mt-3">
            <Row className="align-items-center">
                <Col className="d-flex justify-content-center">
                    <Form>
                        <Image width={300} height={300} src={item.img}/>
                        <h2>{item.name}</h2>
                        <div
                            style={{fontSize: 24}}
                        >
                            {item.price} рубля
                        </div>
                        <text>
                            {item.description}
                        </text>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemPage;