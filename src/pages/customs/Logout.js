import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import AuthServices from '../../services/AuthService';

function Home(props) {

    useEffect(() => {
        AuthServices.logout();
        props.history.push('/login');
    }, [])

    return (
        <div>Logout</div>
    )
}

export default withRouter(Home);
