import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {Col, Container, Form, FormText, Image, Row} from "react-bootstrap";
import {fetchOneItem} from "../http/itemAPI";

const ItemPage = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row className="align-items-center">
                <Col className="d-flex justify-content-center">
                    <Form>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + item.img}/>
                        <h2>{item.name}</h2>
                        <div
                            style={{fontSize: 24}}
                        >
                            {item.price} рубля
                        </div>
                        <FormText>
                            {item.description}
                        </FormText>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemPage;