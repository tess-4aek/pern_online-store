import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(() => setLoading(false))
        }, 1000)
    }, [])

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight}}><Spinner animation={'grow'}/></div>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;