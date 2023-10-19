import "./MoviesCard.css";

const MoviesCard = ({ film }) => {
    return (
        <li className="card">
            <img src={film.image} className="card__image" alt={film.name} />
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__title">{film.name}</h2>
                    <button
                        type="button"
                        className={`card__button ${
                            film.isSaved ? "card__button_active" : ""
                        }`}
                        aria-label="Сохранить карточку фильма"
                    ></button>
                </div>
                <p className="card__duration">1ч42м</p>
            </div>
        </li>
    );
};

export default MoviesCard;
