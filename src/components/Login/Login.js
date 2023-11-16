import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../utils/useFormValidation";

const Login = ({ onLogin }) => {
    const { values, isValid, errs, handleChange } = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values.email, values.password);
    }

    return (
        <main className="login">
            <section className="login__container">
                <Link to="/" className="login__logo-link">
                    <img src={logo} className="login__logo" alt="Logo" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
                <form
                    className="login__form"
                    onSubmit={handleSubmit}
                    isValid={isValid}
                >
                    <label className="login__label-form">E-mail</label>
                    <input
                        className={`login__input ${
                            errs.email && "login__input-error"
                        }`}
                        type="email"
                        name="email"
                        id="email"
                        minLength="2"
                        maxLength="30"
                        placeholder="Введите почту"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <span className="login__error">{errs.email}</span>
                    <label className="login__label-form">Пароль</label>
                    <input
                        className={`login__input  ${
                            errs.password && "login__input-error"
                        }`}
                        type="password"
                        name="password"
                        id="password"
                        minLength="6"
                        maxLength="30"
                        required
                        placeholder="Введите пароль"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <span className="login__error">{errs.password}</span>
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
