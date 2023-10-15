import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
    return (
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    );
  }
  
  export default App;