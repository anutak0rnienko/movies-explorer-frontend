import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import filmList from '../../utils/filmList.json';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
    <>
      <Header backgroundColor="#202020" theme={{ default: false }} />
      <main className="savedMovies">
        <SearchForm />
        <MoviesCardList filmList={filmList} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;