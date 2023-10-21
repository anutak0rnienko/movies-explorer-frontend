import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main className="login">
            <section className="login__container">
                <Link to="/" className="login__logo-link">
                    <img src={logo} className="login__logo" alt="Logo" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <label className="login__label-form">E-mail</label>
                    <input
                        className="login__input"
                        type="email"
                        name="email"
                        id="email"
                        minLength="2"
                        maxLength="30"
                        placeholder="Введите почту"
                    />
                    <span className="login__error"></span>
                    <label className="login__label-form">Пароль</label>
                    <input
                        className="login__input"
                        type="password"
                        name="password"
                        id="password"
                        minLength="6"
                        maxLength="30"
                        required
                        placeholder="Введите пароль"
                    />
                    <span className="login__error"></span>
                    <button className="login__button" type="submit">
                        Войти
                    </button>
                </form>
                <p className="login__question">
                    Еще не зарегистрированы?
                    <Link className="login__link" to="/signup">
                        Регистрация
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Login;
