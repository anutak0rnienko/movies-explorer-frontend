import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavTab from "../Main/NavTab/NavTab";
import "./Header.css";
import { isLoggedContext } from "../../context/isLoggedContext";

const Header = ({ headerColor }) => {
    const location = useLocation();
    const pages = ["/profile", "/movies", "/saved-movies"];
    const isAuthPage = pages.includes(location.pathname);

    const headerStyle = {
        backgroundColor: headerColor,
    };

    // const loggedIn = useContext(isLoggedContext);

    return (
        <header style={headerStyle} className="header">
            <div className="header__container">
                <Link to="/" className="header__container-logo">
                    <img src={logo} className="header__logo" alt="Logo" />
                </Link>
                {isAuthPage ? <Navigation /> : <NavTab />}
            </div>
        </header>
    );
};

export default Header;
