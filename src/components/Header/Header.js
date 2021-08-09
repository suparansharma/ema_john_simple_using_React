import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
import  {UserContext} from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
       <div className="Header">
           <img src={logo} alt="" />
           <nav>
            <Link to="/shop">SHOP</Link>
           <Link to="/review">ORDER RIVEW</Link>
           <Link to="/manage">MANAGE</Link>
           <button onClick={() =>setLoggedInUser({})}>Sign Out</button>
           </nav>

       </div>
    );
};

export default Header;