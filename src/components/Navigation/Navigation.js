import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../images/icon__COLOR_icon-main.svg";
import "./Navigation.css";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const burgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {isMenuOpen && (
                <div className="navigation" onClick={burgerMenu}></div>
            )}
            <nav
                className={`navigation ${
                    isMenuOpen ? "navigation__active" : ""
                }`}
            >
                <div className="navigation__container">
                    {isMenuOpen && (
                        <NavLink to="/" className="navigation__movie">
                            Главная
                        </NavLink>
                    )}
                    <NavLink
                        to="/movies"
                        className="navigation__movie navigation__movie_film"
                    >
                        Фильмы
                    </NavLink>
                    <NavLink
                        to="/saved-movies"
                        className="navigation__movie navigation__movie_link"
                    >
                        Сохраненные фильмы
                    </NavLink>
                </div>
                <Link to="/profile" className="navigation__content">
                    <p className="navigation__title">Аккаунт</p>
                    <div className="navigation__container-image">
                        <img
                            className="navigation__image"
                            src={icon}
                            alt="значок профиля"
                        />
                    </div>
                </Link>
                {!isMenuOpen && (
                    <button
                        type="button"
                        className="navigation__burger-open"
                        onClick={burgerMenu}
                        aria-label="Открыть меню"
                    ></button>
                )}
                {isMenuOpen && (
                    <button
                        type="button"
                        className="navigation__burger-close"
                        onClick={burgerMenu}
                        aria-label="Закрыть меню"
                    ></button>
                )}
            </nav>
        </>
    );
}

export default Navigation;
