import React from "react";
import FavoriteList from "../FavoritesList/FavoriteList";
import MoviesList from "../Movies/MoviesList";
import Navbar from "../Navbar/Navbar";
import BlogsList from "../Blogs/BlogsList";
import CreateBlog from "../CreateBlog/CreateBlog";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<BlogsList />} />
        <Route path='/movies' exact element={<MoviesList />} />
        <Route path='/favorites' exact element={<FavoriteList />} />
        <Route path='/create_blog' exact element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
