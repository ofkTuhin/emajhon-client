import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav className="nav">
                <Link to={'/shop'}>shop</Link>
                <Link to={'/order'}>Ordere Review</Link>
                <Link to={'/inventory'}>Manage Inventory</Link>
               
            </nav>
        </div>
    );
};

export default Header;