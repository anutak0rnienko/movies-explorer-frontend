import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ film }) => {
    const location = useLocation();
    const isSavedCardPage = location.pathname === "/saved-movies";

    return (
        <li className="card">
            <img src={film.image} className="card__image" alt={film.name} />
            <div className="card__container">
                <div className="card__info">
                    <h2 className="card__title">{film.name}</h2>
                    {isSavedCardPage ? (
                        <button
                            type="button"
                            className="card__button-delete"
                            aria-label="Удалить фильм"
                        ></button>
                    ) : (
                        <button
                            type="button"
                            className={`card__button ${
                                film.isSaved ? "card__button_active" : ""
                            }`}
                            aria-label="Сохранить фильм"
                        ></button>
                    )}
                </div>
                <p className="card__duration">1ч42м</p>
            </div>
        </li>
    );
};

export default MoviesCard;
