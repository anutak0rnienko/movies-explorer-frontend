import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/icon__COLOR_icon-main.svg";

function Navigation({ handleClose }) {
  const setActiveButton = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link";

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-wrapper"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-button"
          onClick={handleClose}
        ></button>
        <nav className="navigation__links-list">
          <NavLink to="/" className={setActiveButton} onClick={handleClose}>
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActiveButton}
            onClick={handleClose}
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link
          to="/profile"
          className="navigation__account-button"
          onClick={handleClose}
        >
          <div className="navigation__account-text">Аккаунт</div>
          <img src={account} alt="account" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
