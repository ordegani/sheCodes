import imdb from "../../apis/imdb";
import { connect } from "react-redux";
import { React, useEffect } from "react";
import "./MoviesList.css";
import Movie from "../Movie/Movie";

const MoviesList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const list = () => {
    return props.movies.map((movie, index) => {
      return (

        <Movie
          key={index}
          movie_title={movie.title}
          movie_name={movie.name}
          movie_posterPath={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          movie_voteAverage={movie.vote_average}
          movie_releaseDate={movie.release_date}
          movie_overview={movie.overview}
          onFavoriteClick={() => props.saveMovie(movie)}
          text="❤"
        ></Movie>

      );
    });
  };
  return (<div className="movies_listContainer">{list()}</div>);
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch, favorites) => {
  return {
    saveMovie: (movie) => {
      dispatch({ type: "MOVIE_SAVED_TO_FAVORITES", payload: movie })
    },
    fetchData: async () => {
      const response = await imdb.get("./");
      return dispatch({
        type: "FETCHED_DATA",
        payload: response?.data?.results,
      });
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MoviesList);
