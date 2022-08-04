import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = { id: 1, name: 'Iphone 12 Pro', price: '32600', rating: 5, img: 'https://images.biggeek.ru/1/435/4b14/12465-456bigeek_image2.jpeg' }
    const description = [
        {id: 1, title: "Оперативна пам'ять", description: "5гб"},
        {id: 2, title: "Камера", description: "12мп"},
        {id: 3, title: "Процесор", description: "єпл якийсь там"},
        {id: 4, title: "Кількість ядер", description: "4"},
        {id: 5, title: "Батарея", description: "3600мАч"}
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={'outline-dark'}>Додати у кошик</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column mt-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 5}}>
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;