import React, { useEffect } from 'react';
import Sidebar from '../../components/Theme-Corporate/SidebarCorporate'
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

function Home(props) {

    const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            props.history.push("/login");
        }
    })

    return (
        <div>Home</div>
    )
}

export default withRouter(Home);
