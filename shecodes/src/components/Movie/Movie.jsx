import React from "react";
import "./Movie.css";

const Movie = ({
  movie_title,
  movie_name,
  movie_posterPath,
  movie_voteAverage,
  movie_releaseDate,
  movie_overview,
  Plot,
  imdbID,
  Year,
  text,
  onFavoriteClick }) => {
  return (
    <div>
      <div className={movie_title ? "movie_item" : "none"}>
        <div className="movie_title">
          {movie_title ? movie_title : movie_name}
        </div>
        <img src={movie_posterPath ? movie_posterPath : null} width="300" height="300"></img>
        <div className="movie_releaseDate"> {movie_releaseDate ? movie_releaseDate : Year}</div>
        <div className="movie_rating">{movie_voteAverage ? movie_voteAverage : imdbID}</div>
        <button
          className="save_movie"
          onClick={() => onFavoriteClick()}
          type="Submit"
        >
          {text}
        </button>
        <p className="movie_overview">{movie_overview === "N/A" ? "no plot overview available for this movie, sorry!" : Plot ? Plot : movie_overview}</p>
      </div>
    </div>
  );
};
export default Movie;
