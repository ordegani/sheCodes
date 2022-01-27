import React from "react";
import FavoriteList from "../Favorite";
import MoviesList from "../Movies/MoviesList";
import "./App.css";

const App = () => {
  return (
    <div className="home">
      <div>
        <MoviesList></MoviesList>
        <FavoriteList></FavoriteList>

      </div>
    </div>
  );
};
export default App;
