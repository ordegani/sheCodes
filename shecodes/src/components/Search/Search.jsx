import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "../Movie/Movie.css";
import "./Search.css";

const SearchForFilm = (props) => {
  // speechRecognition
  const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();
  const [i, setI] = useState(0);

  recognition.onstart = () => {
    console.log("speech recognition is on now");
    setI(1);
  }
  recognition.onend = (event) => {
    setI(0);
    console.log(i);
  }
  recognition.onresult = (event) => {
    const index = event.resultIndex;
    const text = event.results[index][0].transcript;
    setSearch(text);
    if (text) {
      speechReply(text);
    }
  }
  const speechMode = () => {
    recognition.start();
  }
  const speechReply = (message) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    window.speechSynthesis.speak(speech);
  }
  //
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
  useEffect(() => {
    getMovie();
  }, [query]);

  return (
    <div className="Scontainer">
      <div className="inner_Scontainer">
        <div className="top_Section">
          <form onSubmit={getSearch} className="search-form">
            <div>
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
            </div>

            <h6 style={{ color: " rgb(255, 234, 0)" }}>Advanced search:</h6>
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

          <button className="recognition_Button" onClick={speechMode}>
            <img width="30rem" height="30rem"
              src={!i ? "https://lh3.googleusercontent.com/zSPNQP5Q3gVkoQ1TsYI9AiTOoyColTI97rcFVhiQrusfAzbGUae7FULRR2Wr1qnH1-I=w24"
                : "https://thumbs.dreamstime.com/b/recording-symbol-isolated-white-background-record-icon-189850773.jpg"}
            />
          </button>
        </div>
        <div>{movie.Error === "Movie not found!" ? <img src="https://i.imgflip.com/1wfq9j.jpg" height="200px" width="400px" /> : null}</div>
        <div className={query === "" ? "none" : "SmovieContainer"}>
          <Movie
            key={movie.imdbID}
            movie_title={movie.Title}
            movie_posterPath={movie.Poster}
            movie_voteAverage={movie.imdbRating}
            movie_releaseDate={movie.Year}
            onFavoriteClick={() => props.saveMovie(movie)}
            text={movie.Title ? "❤" : null}
            movie_overview={movie.Plot}
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