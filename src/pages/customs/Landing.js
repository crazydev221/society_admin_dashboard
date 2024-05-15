import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {

    return (
        <div>
            <Link to="login">
                Login
            </Link>
            
            <Link to="home">
                Home
            </Link>
        </div>
    )
}
