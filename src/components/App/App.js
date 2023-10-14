import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import Login from '../Login/Login';

function App() {
    return (
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    );
  }
  
  export default App;