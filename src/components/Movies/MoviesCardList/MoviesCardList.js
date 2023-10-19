import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import Preloader from '../../Preloader/Preloader';
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
        <section className="movies-card">
          <div className="movies-card__container">
            { isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className='movies-card__content'>
              {filmList.map((image, index) => (
                <MoviesCard key={index} film={image} />
              ))}
            </ul>
            {filmList.length > 14 && (
              <button className="movies-card__button">Ещё</button>
            )}
          </>
        )}
          </div>
        </section>
      );
}

export default MoviesCardList;