import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI.js';
import { Context } from '../index.js';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';


const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваше мило ...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваш пароль ...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <div>
                                Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Скоріше створюй!</NavLink>
                            </div>
                            :
                            <div>
                                Вже є акаунт? <NavLink to={LOGIN_ROUTE}>Тоді авторизуйся!</NavLink>
                            </div>
                        }

                        <Button
                            onClick={click}
                            variant='outline-success'
                        >
                            {isLogin ? 'Увійти' : 'Створити акаунт'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;