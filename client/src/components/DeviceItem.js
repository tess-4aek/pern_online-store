import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({ device }) => {
    const history = useHistory();
    return (
        <Col className='mt-5' md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer', padding: 10 }} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>BRAND</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;