import React from "react";
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import filmList from "../../utils/filmList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Movies = () => {
    return (
        <>
            <Header backgroundColor="#202020" theme={{ default: false }} />
            <main>
                <SeachForm />
                <MoviesCardList filmList={filmList} />
            </main>
            <Footer />
        </>
    );
};

export default Movies;
