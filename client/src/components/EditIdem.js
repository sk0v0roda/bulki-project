import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { updateItem } from '../http/itemAPI';

const EditItem = ({ item, show, onHide }) => {
    const id = item.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        setName(item.name || '');
        setPrice(item.price || 0);
        setDescription(item.description || '');
    }, [item]);

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const changeItem = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('description', description);
        if (file)
            formData.append('img', file);
        updateItem(id, formData).then((data) => onHide());
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Редактировать товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={'Введите название товара'}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={'Введите цену товара'}
                        type="number"
                        onChange={(e) => setPrice(Number(e.target.value))}
                        value={price}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={'Введите описание товара'}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <Form.Control
                        className="mt-2 mb-2"
                        placeholder={'Загрузите картинку'}
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={changeItem}>
                    Редактировать
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditItem;