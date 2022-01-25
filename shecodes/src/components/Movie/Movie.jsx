import React from "react";
import "./Movie.css";

const Movie = ({
  movie_title,
  movie_name,
  movie_posterPath,
  movie_voteAverage,
  movie_releaseDate,
  movie_overview,
  onFavoriteClick}) => {
  return (
    <div className="movie_item">
      <div className="movie_title">
        {movie_title ? movie_title : movie_name}
      </div>
      <img src={movie_posterPath} width="300" height="300" alt="img"></img>
      <div className="movie_releaseDate">released in: {movie_releaseDate}</div>
      <div className="movie_rating">rating: {movie_voteAverage}</div>
      <p className="movie_overview">{movie_overview}</p>
      <button
        className="save_movie"
        onClick={() => onFavoriteClick()}
        type="Submit"
      >*
        
      </button>  
        </div>
  );
};
export default Movie;