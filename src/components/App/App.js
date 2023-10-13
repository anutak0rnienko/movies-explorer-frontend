import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
    return (
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
  
  export default App;