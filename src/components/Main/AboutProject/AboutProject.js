import './AboutProject.css';

const AboutProject = () => {
    return (
        <section className="about-project">
            <div className='about-project__content'>
                <div className='about-project__group-title'>
                    <h2 className='about-project__title'>О проекте</h2>
                </div>
                <ul className='about-project__description'>
                    <li>
                        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li>
                        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <div className='about-project__plan'>
                    <p className='about-project__backend about-project__plan-text about-project__backend_text'>1 неделя</p>
                    <p className='about-project__frontend about-project__plan-text about-project__frontend_text'>4 недели</p>
                    <p className='about-project__backend about-project__plan-text'>Back-end</p>
                    <p className='about-project__frontend about-project__plan-text'>Front-end</p>
                </div>
            </div>
        </section>
    );
};

export default AboutProject;