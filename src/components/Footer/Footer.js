import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <p className="footer__title">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>
                </div>
                <div className="footer__content">
                    <p className="footer__text">annakornienko© 2020</p>
                    <nav className="footer__link-content">
                        <a
                            className="footer__link"
                            href="https://practicum.yandex.ru/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Яндекс.Практикум
                        </a>
                        <a
                            className="footer__link"
                            href="https://github.com/anutak0rnienko"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
