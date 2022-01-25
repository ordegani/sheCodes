import React from "react";
import Favorite from "../Favorite";
import Movies from "../Movies/MoviesList";
import "./App.css";

const App = () => {
  return (
    <div className="home">
      <div>
        <Movies></Movies>
        <Favorite></Favorite>

      </div>
    </div>
  );
};
export default App;
