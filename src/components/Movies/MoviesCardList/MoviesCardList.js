import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchError from "../../SearchError/SearchError";
import Preloader from "../../Preloader/Preloader";
import {
  DESKTOP_CARDS_DISPLAY_LIMIT,
  TABLET_CARDS_DISPLAY_LIMIT,
  MOBILE_CARDS_DISPLAY_LIMIT,
} from "../../../utils/constants";

function MoviesCardList({
  cards,
  isLoading,
  isNotFound,
  isSavedFilms,
  savedMovies,
  isReqError,
  handleLikeFilm,
  onDeleteCard,
}) {
  const [shownMovies, setShownMovies] = useState(0);

  useEffect(() => {
    handleMovieShowCounterLimit();
  }, [cards]);

  function handleMoviesSave(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

  function handleMovieShowCounterLimit() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownMovies(16);
    } else if (display > 767) {
      setShownMovies(8);
    } else {
      setShownMovies(5);
    }
  }

  function handleMovieWidthDisplay() {
    const display = window.innerWidth;
    if (display > 1279) {
      setShownMovies(shownMovies + DESKTOP_CARDS_DISPLAY_LIMIT);
    } else if (display > 767) {
      setShownMovies(shownMovies + TABLET_CARDS_DISPLAY_LIMIT);
    } else {
      setShownMovies(shownMovies + MOBILE_CARDS_DISPLAY_LIMIT);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleMovieShowCounterLimit);
    }, 500);
    return () => {
      window.removeEventListener("resize", handleMovieShowCounterLimit);
    };
  });

  const { pathname } = useLocation();

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={"Not found"} />}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            "Sorry! An error occurred during the request. There may be a connection problem or the server is unavailable. Wait a bit and try again"
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === "/saved-movies" ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={handleMoviesSave(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper"></div>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {cards.slice(0, shownMovies).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    saved={handleMoviesSave(savedMovies, card)}
                    cards={cards}
                    card={card}
                    handleLikeFilm={handleLikeFilm}
                    isSavedFilms={isSavedFilms}
                    onDeleteCard={onDeleteCard}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="cards__button-wrapper">
                {cards.length > shownMovies ? (
                  <button
                    className="cards__button-wrapper cards__button"
                    onClick={handleMovieWidthDisplay}
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
