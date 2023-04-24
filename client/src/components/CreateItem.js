import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createItem} from "../http/itemAPI";

const CreateItem = ({show, onHide}) => {
    const {item} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addItem = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('description', description)
        formData.append('img', file)
        createItem(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={"Введите название товара"}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={"Введите цену товара"}
                        type="number"
                        onChange={e => setPrice(Number(e.target.value))}
                        value={price}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={"Введите описание товара"}
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={"Загрузите картинку"}
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addItem}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateItem;