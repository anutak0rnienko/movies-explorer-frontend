import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import filmListSaved from "../../utils/filmListSaved.json";
import Footer from "../Footer/Footer";

const SavedMovies = () => {
    return (
        <>
            <Header headerColor="#202020" theme={{ default: false }} />
            <main className="saved-movies">
                <SearchForm />
                <MoviesCardList filmList={filmListSaved} />
            </main>
            <Footer />
        </>
    );
};

export default SavedMovies;
