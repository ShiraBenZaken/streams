import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import '../index.css'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo" to="/">Streamy</Link>
            <div>
                <Link to="/">All Streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;
