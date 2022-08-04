import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Придбай Слона</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            onClick={() => history.push(ADMIN_ROUTE)}
                            variant='outline-light'
                            className='mr-2'
                        >
                            Адмінка
                        </Button>
                        <Button
                            onClick={() => history.push(LOGIN_ROUTE)}
                            variant='outline-light'
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;