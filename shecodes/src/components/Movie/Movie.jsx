import React from "react";
import "../Movies/MoviesList.css";

const Movie = ({
  movie_title,
  movie_name,
  movie_posterPath,
  movie_voteAverage,
  movie_releaseDate,
  movie_overview,
}) => {
  return (
    <div className="movie_item">
      <div className="movie_title">
        {movie_title ? movie_title : movie_name}
      </div>
      <img src={movie_posterPath} width="300" height="300" alt="img"></img>
      <div className="movie_rating">{movie_voteAverage}</div>
      <div className="movie_releaseDate">{movie_releaseDate}</div>
      <p className="movie_overview">{movie_overview}</p>
      <button className="movie_selectButton">select</button>
    </div>
  );
};
export default Movie;
