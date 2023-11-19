import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { filmListSavedCard } from "../../utils/filmList";
import Footer from "../Footer/Footer";
import { filterMovies, filterDuration } from "../../utils/utils";

const SavedMovies = ({ loggedIn, onDeleteCard, savedMovies }) => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchRequest, setSearchRequest] = useState("");
  const [isFilteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setShortFilm] = useState(false);

  function handlesearchFilterMovies(request) {
    setSearchRequest(request);
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, isSearchRequest);
    setFilteredMovies(
      isShortMovies ? filterDuration(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortMovies, isSearchRequest]);

  useEffect(() => {
    if (isFilteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [isFilteredMovies]);

  function handleShortMovieFilterCheck() {
    setShortFilm(!isShortMovies);
  }

  return (
    <>
      <section className="saved-movies">
        <Header loggedIn={loggedIn} />
        <SearchForm
          handlesearchFilterMovies={handlesearchFilterMovies}
          onFilterMovies={handleShortMovieFilterCheck}
        />
        <MoviesCardList
          cards={isFilteredMovies}
          isSavedFilms={true}
          onDeleteCard={onDeleteCard}
          savedMovies={savedMovies}
          isNotFound={isNotFound}
        />
        <Footer />
      </section>
    </>
  );
};

export default SavedMovies;
