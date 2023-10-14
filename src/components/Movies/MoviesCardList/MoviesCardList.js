import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ filmList }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <section className="movies-list">
          <div className="movies-list__container">
            {/* { isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className='moviesCards'>
              {filmList.map((film, index) => (
                <MoviesCard key={index} film={film} />
              ))}
            </ul>
            {filmList.length > 14 && (
              <button className="moviesCardsList__button">Ещё</button>
            )}
          </>
        )} */}
          </div>
        </section>
      );
}

export default MoviesCardList;