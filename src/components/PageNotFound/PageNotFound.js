import { Link } from "react-router-dom";
import './PageNotFound.css';

const PageNotFound = () => {
    return (
      <div className='not-found'>
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__description">Страница не найдена</p>
        </div>
        <Link to="/" className="not-found__link">Назад</Link>
      </div>
    )
  }
  
  export  default PageNotFound;