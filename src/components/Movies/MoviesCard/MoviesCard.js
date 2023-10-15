import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ card }) => {
    const location = useLocation();
    const duration = (number) => {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;
        return `${hours}ч. ${minutes}мин.`;
      };

    const isSavedFilmsPage = location.pathname === '/saved-movies';  

    return (
        <li className='card'>
          <img className='card__image' src={card.image} alt={card.name} />
          <div className='card__container'>
            <div className='card__info'>
              <h2 className='card__title'>{card.name}</h2>
              {isSavedFilmsPage ? (
                <button type='button' className='card__button-delete' aria-label='Удалить фильм'></button>
              ) : (
                <button type='button' className={`card__button-save ${card.isSaved ? 'card__button-save_active' : ''}`} aria-label='Сохранить карточку фильма'></button>
              )}
            </div>
            <p className='card__duration'>{duration(card.duration)}</p>
          </div>
        </li>
      );
}

export default MoviesCard;