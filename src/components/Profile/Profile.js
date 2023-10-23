import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ( { email, name } ) => {
    return (
        <>
            <Header headerColor="#202020" theme={{ default: false }} />
            <main className="profile">
                <div className="profile__container">
                    <h2 className="profile__title">Привет, Аня!</h2>
                    <form className="profile__form">
                        <div className="profile__form-name">
                            <label className="profile__label-form">Имя</label>
                            <input
                                className="profile__input"
                                type="text"
                                name="username"
                                id="name"
                                minLength="2"
                                maxLength="30"
                                value={name}
                            />
                        </div>
                        <div className="profile__form-email">
                            <label className="profile__label-form">
                                E-mail
                            </label>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                id="email"
                                minLength="2"
                                maxLength="30"
                                value={email}
                            />
                        </div>
                    </form>
                    <div className="profile__button">
                        <button type="button" className="profile__edit-button">
                            Редактировать
                        </button>
                        <Link to={`/`} className="profile__link">
                            Выйти из аккаунта
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
