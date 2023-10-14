import React from 'react';
import SeachForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import filmList from "../../utils/filmList";
import Footer from '../Footer/Footer';

const Movies = () => {
    return (
      <>
        <main>
          <SeachForm />
          <MoviesCardList filmList={filmList} />
        </main>
        <Footer />
      </>
    );
  };
  
  export default Movies;