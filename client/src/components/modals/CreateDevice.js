import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { fetchBrands, fetchTypes } from '../../http/deviceAPI';


const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addDevice = () => {

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
                    Додати новий бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedType.name || "Оберіть тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mr-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Оберіть бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-4'
                        placeholder={'Введіть назву пристрою'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder={'Введіть ціну пристрою'}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        type='number'
                    />
                    <Form.Control
                        className='mt-4'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Додати нову характеристику пристрою
                    </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder={'Введіть назву характеристики'}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder={'Введіть опис характеристики'}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрити</Button>
                <Button variant='outline-success' onClick={addDevice}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;