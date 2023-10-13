import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h4 className='portfolio__title'>Портфолио</h4>
                <nav className='portfolio__content'>
                    <a href='https://github.com/anutak0rnienko/how-to-learn' target="_blank" rel="noreferrer" className='portfolio__list-content'>
                        <p className='portfolio__text'>Статичный сайт</p>
                        <p className='portfolio__link'>↗</p>
                    </a>
                    <a href='https://anutak0rnienko.github.io/russian-travel/index.html' target="_blank" rel="noreferrer" className='portfolio__list-content'>
                        <p className='portfolio__text'>Адаптивный сайт</p>
                        <p className='portfolio__link'>↗</p>
                    </a>
                    <a href='https://github.com/anutak0rnienko/mesto-react' target="_blank" rel="noreferrer" className='portfolio__list-content'>
                        <p className='portfolio__text'>Одностраничное приложение</p>
                        <p className='portfolio__link'>↗</p>
                    </a>
                </nav>
            </div>
        </section>
    )
}

export default Portfolio;