import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../Main/NavTab/NavTab';
import { authPages } from '../../utils/constants';

const Header = ({ backgroundColor }) => {
    const headerStyle = {
      backgroundColor: backgroundColor,
    };
    const location = useLocation();
    const isAuthPage = authPages.includes(location.pathname);
  
    return (
      <header style={headerStyle} className="header">
        <div className='header__contaner'>
          <Link to="/" className="header__container-logo">
            <img src={logo} className="header__logo" alt="Logo" />
          </Link>
          {isAuthPage ? <Navigation /> : <NavTab />}
        </div>
      </header>
    );
  };
  
  export default Header;