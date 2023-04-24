import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateItem from "../components/CreateItem";

const Admin = () => {
    const [itemVisible, setItemVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-primary"} className="mt-5"
            onClick={() => setItemVisible(true)}
            >Добавить устройство</Button>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
        </Container>
    );
};

export default Admin;