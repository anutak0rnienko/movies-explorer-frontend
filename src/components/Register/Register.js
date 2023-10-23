import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
    return (
            <main className="register">
                <section className="register__container">
                    <Link to="/" className="register__logo-link">
                        <img src={logo} className="register__logo" alt="Logo" />
                    </Link>
                    <h2 className="register__title">Добро пожаловать!</h2>
                    <form className="register__form">
                        <label className="register__label-form">Имя</label>
                        <input
                            className="register__input"
                            type="text"
                            name="username"
                            id="name"
                            minLength="2"
                            maxLength="30"
                            placeholder="Введите имя"
                        />
                        <span className="register__error"></span>
                        <label className="register__label-form">E-mail</label>
                        <input
                            className="register__input"
                            type="email"
                            name="email"
                            id="email"
                            minLength="2"
                            maxLength="30"
                            placeholder="Введите почту"
                        />
                        <span className="register__error"></span>
                        <label className="register__label-form">Пароль</label>
                        <input
                            className="register__input"
                            type="password"
                            name="password"
                            id="password"
                            minLength="6"
                            maxLength="30"
                            required
                            placeholder="Введите пароль"
                        />
                        <span className="register__error"></span>
                        <span className="register__error-message">
                            Что-то пошло не так...
                        </span>
                        <button className="register__button" type="submit">
                            Зарегистрироваться
                        </button>
                    </form>
                    <p className="register__question">
                        Уже зарегистрированы?
                        <Link className="register__link" to="/signin">
                            Войти
                        </Link>
                    </p>
                </section>
            </main>
    );
};

export default Register;
