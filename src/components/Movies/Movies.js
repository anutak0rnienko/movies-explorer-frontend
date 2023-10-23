import React from "react";
import SeachForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { filmListCard } from "../../utils/filmList";

const Movies = () => {
    return (
        <>
            <Header headerColor="#202020" theme={{ default: false }} />
            <main>
                <SeachForm />
                <MoviesCardList filmList={filmListCard} />
            </main>
            <Footer />
        </>
    );
};

export default Movies;
