import "./MoviesCardList.css";
import { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
    movies,
    searchErr,
    isRegistring,
    isNotFound,
    onSave,
    onDelete,
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="movies-card">
            <div className="movies-card__container">
                {isRegistring && <Preloader />}
                {searchErr && (
                    <p className="moviescards__error">
                        Нужно ввести ключевое слово!
                    </p>
                )}
                {isNotFound && !searchErr && (
                    <p className="moviescards__not-found">Ничего не найдено!</p>
                )}
                {!isRegistring && !searchErr && !isNotFound && (
                    <ul className="movies-card__content">
                        {movies.map((movie) => (
                            <MoviesCard
                                key={movie.id || movie.movieId}
                                movie={movie}
                                onSave={onSave}
                                onDelete={onDelete}
                            />
                        ))}
                    </ul>
                )}
                <button className="movies-card__button">Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;
