import "./SavedMovies.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { filmListSavedCard } from "../../utils/filmList";
import Footer from "../Footer/Footer";
import mainApi from "../../utils/MainApi";
import { updateFiltered } from "../../utils/utils";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useLocalStorage from "../../utils/useLocalStorage";
import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";

const SavedMovies = ({ showError, onDelete }) => {
    const [savedMovies, setSavedMovie] = useState([]);
    const [movies, setMovies] = useLocalStorage("movies", []);
    const { isRegistring, setIsRegistring } = useContext(CurrentUserContext);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isTimeMovieChecked, setIsTimeMovieChecked] = useState(false);
    const [searchAllMovies, setSearchAllMovies] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);
    const [searchErr, setSearchErr] = useState(false);

    useEffect(() => {
        // setIsRegistring(true);
        mainApi
            .getMovies()
            .then((movies) => {
                setSavedMovie(movies);
                setFilteredMovies(movies);
            })
            .catch((err) => {
                // showError(`'Ошибка:' ${err}`);
            })
            .finally(() => {
                // setIsRegistring(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteCard = (movieId) => {
        onDelete(movieId)
            .then(() => {
                setSavedMovie((prev) =>
                    prev.filter((movie) => movie._id !== movieId)
                );
                setFilteredMovies((prev) =>
                    prev.filter((movie) => movie._id !== movieId)
                );
                setMovies((prev) =>
                    prev.map((film) =>
                        film._id === movieId
                            ? { ...film, isSaved: false, _id: null }
                            : film
                    )
                );
            })
            .catch((err) => {
                // showError(err);
            });
    };

    const handleFilter = (check) => {
        setIsNotFound(false);
        if (!searchAllMovies && filteredMovies.length === 0) return;
        const filtered = updateFiltered(savedMovies, searchAllMovies, check);
        return filtered.length > 0
            ? setFilteredMovies(filtered)
            : setIsNotFound(true);
    };

    const changeTimeMovie = (check) => {
        setIsTimeMovieChecked(check);
        handleFilter(check);
    };

    const handleSearch = () => {
        setFilteredMovies([]);
        setSearchErr(false);
        if (!searchAllMovies) {
            setSearchErr(true);
            return;
        }
        handleFilter(isTimeMovieChecked, searchAllMovies);
    };

    return (
        <>
            <Header headerColor="#202020" theme={{ default: false }} />
            <main className="saved-movies">
                <SearchForm
                    searchQuery={searchAllMovies}
                    onSearch={handleSearch}
                    setIsTimeMovieChecked={setIsTimeMovieChecked}
                    setSearchAllMovies={setSearchAllMovies}
                />
                <FilterCheckbox
                    onCheckboxChange={changeTimeMovie}
                    isTimeMovieChecked={isTimeMovieChecked}
                />
                <MoviesCardList
                    isNotFound={isNotFound}
                    onDelete={deleteCard}
                    searchErr={searchErr}
                    isRegistring={isRegistring}
                    movies={filteredMovies}
                />
            </main>
            <Footer />
        </>
    );
};

export default SavedMovies;
