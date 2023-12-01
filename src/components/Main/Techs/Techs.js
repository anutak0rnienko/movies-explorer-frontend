import "./Techs.css";

const Techs = () => {
    return (
        <section className="techs">
            <div className="techs__content">
                <h2 className="techs__title">Технологии</h2>
                <div className="techs_container">
                    <h3 className="techs__container-title">7 технологий</h3>
                    <p className="techs__container-subtitle">
                        На курсе веб-разработки мы освоили технологии, которые
                        применили в дипломном проекте.
                    </p>
                    <ul className="techs__list">
                        <li className="techs__text">
                            <p className="techs__item">HTML</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">CSS</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">JS</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">React</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">Git</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">Express.js</p>
                        </li>
                        <li className="techs__text">
                            <p className="techs__item">mongoDB</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Techs;
