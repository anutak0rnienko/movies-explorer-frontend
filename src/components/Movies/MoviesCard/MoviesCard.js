import React from "react";
import "./MoviesCard.css";
import { durationConverter } from "../../../utils/utils";

const MoviesCard = ({
  card,
  isSavedFilms,
  savedMovies,
  saved,
  handleLikeFilm,
  onDeleteCard,
}) => {
  function onDelete() {
    onDeleteCard(card);
  }

  function onCardClick() {
    if (saved) {
      onDeleteCard(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeFilm(card);
    }
  }

  const cardLikeButtonClassName = `${
    saved ? "card__button card__button_active" : "card__button"
  }`;

  return (
    <li className="card" key={card.id}>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          alt={card.nameRU}
          src={
            isSavedFilms
              ? card.image
              : `https://api.nomoreparties.co/${card.image.url}`
          }
        />
      </a>

      <div className="card__container">
        <div className="card__info">
          <h2 className="card__title">{card.nameRU}</h2>

          {isSavedFilms ? (
            <button
              type="button"
              className="card__button-delete"
              aria-label="Удалить фильм"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={cardLikeButtonClassName}
              aria-label="Сохранить фильм"
              onClick={onCardClick}
            ></button>
          )}
        </div>
        <p className="card__duration">{durationConverter(card.duration)}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
