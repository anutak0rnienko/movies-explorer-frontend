import "./AboutMe.css";
import photoMe from "../../../images/aboutMe.jpg";

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="about-me__content">
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__container">
                    <div className="about-me__info">
                        <h3 className="about-me__name">Анна</h3>
                        <p className="about-me__position">
                            Фронтенд-разработчик, 23 года
                        </p>
                        <p className="about-me__text">
                            Я родилась во Владивостоке, живу в Москве уже 5 лет.
                            Закончила Московский Государственный Технический
                            Университет Гражданской Авиации по специальности
                            "Управление воздушным движением". Работаю в компании
                            Аэрофлот в отделе аэронавигации, недавно начала
                            увлекаться программированием и хочу дальше
                            развиваться в этом направлении.
                        </p>
                        <a
                            href="https://github.com/anutak0rnienko"
                            className="about-me__link"
                        >
                            GitHub
                        </a>
                    </div>
                    <img
                        src={photoMe}
                        className="about-me__photo"
                        alt="Фото Студента"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
