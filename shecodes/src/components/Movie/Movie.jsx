import React from "react";
import "./Movie.css";

const Movie = ({
  movie_title,
  movie_name,
  movie_posterPath,
  movie_voteAverage,
  movie_releaseDate,
  movie_overview,
  text,
  onFavoriteClick }) => {
  return (
    <div>
      <div className={movie_title ? "movie_item" : "none"}>
        <div className="movie_title">
          {movie_title ? movie_title : movie_name}
        </div>
        <img src={movie_posterPath ? movie_posterPath : null} width="300" height="300"></img>
        <div className="movie_releaseDate"> {movie_releaseDate}</div>
        <div className="movie_rating">{movie_voteAverage}</div>
        <button
          className="save_movie"
          onClick={() => onFavoriteClick()}
          type="Submit"
        >
          {text}
        </button>
        <p className="movie_overview">{movie_overview}</p>
      </div>
      {/* <p style={{ color: "rgb(136, 9, 136)" }}>{movie_Error?movie_Error:null}</p> */}
      {/* <img className={movie_Error==="Movie not found!" ? "img":"none"} src="https://i.imgflip.com/1wfq9j.jpg" /> */}
    </div>
  );
};
export default Movie;
