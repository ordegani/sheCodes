import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "../Movie/Movie.css";
import "./Search.css";

const SearchForFilm = (props) => {
  // speechRecognition
  const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();
  recognition.onstart = () => {
    console.log("speech recognition is on now");
  }
  recognition.onresult = (event) => {
    const index = event.resultIndex;
    const text = event.results[index][0].transcript;
    console.log(text);
    setSearch(text);

  }
  const speechMode = () => {
    recognition.start();
  }

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
    console.log(movie.Error);
    const data = await response.json();
    setMovie(data);
    props.setToState(movie.Title);
  };
  console.log(props.favorites);

  useEffect(() => {
    getMovie();
  }, [query]);

  return (
    <div className="Scontainer">
      <div className="inner_Scontainer">
        <form onSubmit={getSearch} className="search-form">
          <div style={{ border: "2px solid yellow" }} >
            <input
              className="search-field"
              placeholder="choose film"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button onClick={speechMode}>
              <img width="50%" height="50%"
                src="https://lh3.googleusercontent.com/zSPNQP5Q3gVkoQ1TsYI9AiTOoyColTI97rcFVhiQrusfAzbGUae7FULRR2Wr1qnH1-I=w24"
              />
            </button>
            <button className="search-button" type="Submit">
              ▶
          </button>
          </div>
          <h7 style={{ color: "rgb(136, 9, 136)" }}>Advanced search:</h7>

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
        <div style={{ color: "red" }}>{movie.Error ? <img src="https://i.imgflip.com/1wfq9j.jpg" /> : null}</div>
        <div className={query === "" ? "none" : "SmovieContainer"}>
          <Movie
            // key={movie.imdbID}
            movie_title={movie.Title}
            movie_posterPath={movie.Poster}
            onFavoriteClick={() => props.saveMovie(movie)}
            text={movie.Title ? "❤" : null}
          ></Movie>
          {/* <div style={{ color: "rgb(136, 9, 136)" }} className={movie.Title?"none":"error_alert"}>{movie.Error}</div> */}
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