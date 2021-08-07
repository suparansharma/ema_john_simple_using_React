import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
       <div className="Header">
           <img src={logo} alt="" />
           <nav>
            <Link to="/shop">SHOP</Link>
           <Link to="/review">ORDER RIVEW</Link>
           <Link to="/manage">MANAGE</Link>
           </nav>

       </div>
    );
};

export default Header;