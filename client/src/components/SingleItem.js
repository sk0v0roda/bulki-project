import React, {useContext} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {ITEM_PAGE_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {deleteItem} from "../http/itemAPI";

const SingleItem = ({item}) => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (user.isAuth ?
            <Col md={3} className="mt-3">
                <Card style={{
                    width: 200,
                    cursor: 'pointer',
                    padding: '15px',
                    border: '1px solid lightgray',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 10px #ccc'
                }} onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0px 0px 20px #ccc';
                    e.currentTarget.style.transition = 'all 0.3s ease-in-out'
                }} onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0px 0px 10px #ccc';
                    e.currentTarget.style.transition = 'all 0.3s ease-in-out'
                }}>
                    <Image style={{maxHeight: '150px'}} src={process.env.REACT_APP_API_URL + item.img} fluid
                           onClick={() => navigate(ITEM_PAGE_ROUTE + '/' + item.id)}/>
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                        <div>{item.name}</div>
                    </div>
                    <div className="text-black-50">{item.price} рублей</div>
                    <Button className="mt-3" variant="danger" onClick={() => deleteItem(item.id)}>Удалить</Button>
                    <Button className="mt-3" variant="outline-dark"
                            onClick={() => console.log('Edit button clicked')}>Редактировать</Button>
                </Card>
            </Col>
            :
            <Col md={3} onClick={() => navigate(ITEM_PAGE_ROUTE + '/' + item.id)} className="mt-3">
                <Card style={{
                    width: 200,
                    cursor: 'pointer',
                    padding: '15px',
                    border: '1px solid lightgray',
                    borderRadius: '5px',
                    background: '#6c757d',
                    boxShadow: '0px 0px 10px #333'
                }} onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0px 0px 20px #333';
                    e.currentTarget.style.transition = 'all 0.3s ease-in-out'
                }} onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0px 0px 10px #333';
                    e.currentTarget.style.transition = 'all 0.3s ease-in-out'
                }}>
                    <Image style={{maxHeight: '150px'}} src={process.env.REACT_APP_API_URL + item.img} fluid
                           onClick={() => navigate(ITEM_PAGE_ROUTE + '/' + item.id)}/>
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                        <div>{item.name}</div>
                    </div>
                    <div>{item.price} рублей</div>
                </Card>
            </Col>
    );
};

export default SingleItem;