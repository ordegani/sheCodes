import { connect } from "react-redux";
import { fetchData } from "../../actions";
import { React, useEffect } from "react";
import "./MoviesList.css";
import Movie from "../Movie/Movie";

const MoviesList = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const list = () => {
    return props.movies.map((movie) => {
      return (
        <Movie
          movie_title={movie.title}
          movie_name={movie.name}
          movie_posterPath={
            "https://image.tmdb.org/t/p/original" + movie.poster_path
          }
          movie_voteAverage={movie.vote_average}
          movie_releaseDate={movie.release_date}
          movie_overview={movie.overview}
        ></Movie>
      );
    });
  };
  return <div className="movies_listContainer">{list()}</div>;
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

// export default connect(null, { fetchData })(Movies);
export default connect(mapStateToProps, { fetchData })(MoviesList);
