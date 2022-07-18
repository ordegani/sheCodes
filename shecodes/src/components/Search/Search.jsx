import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "../Movie/Movie.css";
import "./Search.css";

const SearchForFilm = (props) => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [yearQuery, setyearQuery] = useState("");
  const [yearSearch, setyearSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const updateYearSearch = (m) => {
    setyearSearch(m.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);

    setyearQuery(yearSearch);
    setSearch("");
    setyearSearch("");
  };
/////////////////////////////////
  const getMovie = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&y=${yearQuery?yearQuery:"2022"}&apikey=${apikey}`
    );
    const data = await response.json();
    setMovie(data);
    props.setToState(movie.Title);
  };
  console.log(movie);
  console.log(props.favorites);
////////////////////////////////
  useEffect(() => {
    getMovie();
  }, [query]);
  ///////////////////////////////////////////////////////////////////
  return (
    <div className="Scontainer">
      <div className="inner_Scontainer">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-field"
            placeholder="choose film"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="Submit">
            ▶
          </button>

          <p>Advanced search: </p>

          <input
            className="search-field2"
            placeholder="year"
            type="text"
            onChange={updateYearSearch}
            value={yearSearch}

          />
        </form>
///////////////////////////////////////////////////////////////////











        <div className={query === "" ? "initial_SmovieContainer" : "SmovieContainer"}>
          <Movie
            // key={movie.imdbID}
            movie_title={movie.Title}
            movie_posterPath={movie.Poster}
            onFavoriteClick={() => props.saveMovie(movie)}
            text="❤"
          ></Movie>
          {/* <button
        className="save_movie"
        onClick={() => props.saveMovie(props.movies)}
        type="Submit"
      >
     SAVE
      </button> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch, favorites) => {
  return {
    saveMovie: (movie) => {
      dispatch({ type: "MOVIE_SAVED_TO_FAVORITES", payload: movie })
    },
    setToState: (movie) => {

      dispatch({
        type: "FETCHED_DATA",
        payload: movie,
      });
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchForFilm);