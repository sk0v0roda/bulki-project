import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {ITEM_PAGE_ROUTE} from "../utils/consts";
const SingleItem = ({item}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-3" onClick={() => navigate(ITEM_PAGE_ROUTE + '/' + item.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.img} />
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{item.name}</div>
                </div>
                <div className="text-black-50">{item.price} рублей</div>
            </Card>
        </Col>
    );
};

export default SingleItem;