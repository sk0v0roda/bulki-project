import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import SingleItem from "./SingleItem";

const ItemList = observer(() => {
    const {item} = useContext(Context)
    return (
        <Row className="d-flex">
            {item.items.map(item =>
                <SingleItem key={item.id} item={item}/>
            )}
        </Row>
    );
});

export default ItemList;