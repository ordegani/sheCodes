import React from "react";
import FavoriteList from "../FavoritesList/FavoriteList";
import MoviesList from "../Movies/MoviesList";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<MoviesList />} />
        <Route path='/favorites' exact element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
