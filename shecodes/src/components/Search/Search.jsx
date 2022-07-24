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
  const [typeSearch, settypeSearch] = useState("");
  const [typeQuery, settypeQuery] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const updateYearSearch = (y) => {
    setyearSearch(y.target.value);
  };
  const updatetypeSearch = (t) => {
    settypeSearch(t.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    settypeQuery(typeSearch);
    setyearQuery(yearSearch);
    setSearch("");
    setyearSearch("");
    settypeSearch("");
  };

  const getMovie = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&y=${yearQuery ? yearQuery : "2022"}&type=${typeQuery}&apikey=${apikey}`
    );
    const data = await response.json();
    setMovie(data);
    props.setToState(movie.Title);
  };
  console.log(movie);
  console.log(props.favorites);

  useEffect(() => {
    getMovie();
  }, [query]);

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
          <br />
          <h7 style={{ color: "rgb(136, 9, 136)" }}>Advanced search: </h7>

          <input
            className="search-field2"
            placeholder="2022"
            type="text"
            onChange={updateYearSearch}
            value={yearSearch}

          />

          <select className="search-field3" style={{ color: "grey" }} onChange={updatetypeSearch}>
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
          <div>
          </div>
        </form>
        <div className={query === "" ? "none" : "SmovieContainer"}>
          <Movie 
            // key={movie.imdbID}
            movie_title={movie.Title}
            movie_posterPath={movie.Poster}
            onFavoriteClick={() => props.saveMovie(movie)}
            text={movie.Title?"❤":null}
          ></Movie>
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