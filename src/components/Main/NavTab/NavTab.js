import { Link } from "react-router-dom";
import './NavTab.css';
import logo from '../../../images/logo.svg';

const NavTab = () => {
    return (
        <header className="navtab">
            <div className="navtab__container">
                <img
                    src={logo}
                    alt="Логотип сайта"
                    className="navtab__logo"
                />
                <nav className="navtab__navigation">
                    <Link to="/signup" className="navtab__navigation-link navtab__navigation-link_signup">Регистрация</Link>
                    <Link to="/signin" className="navtab__navigation-link navtab__navigation-link_signin">Войти</Link>
                </nav>
            </div>
        </header>
    )
}

export default NavTab;