import { connect } from "react-redux";
import { fetchData } from "../../actions";
import { React, useEffect } from "react";
import "./Movies.css";

const Movies = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const list=()=>{
      return  props.movies.map((movie) => {
   return(
      <div className="movie_item" >
      <div className="movie_title">{movie.title? movie.title: movie.name}</div>
      <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width="300" height="300" alt="img"></img>
      <div className="movie_rating">{movie.vote_average}</div>
      <div className="movie_releaseDate">{movie.release_date}</div>
      <p className="movie_overview">{movie.overview}</p>
      <button className="movie_selectButton">select</button>
    </div>);
  });
};
return (<div className="movies_listContainer">{list()}</div>);
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

// export default connect(null, { fetchData })(Movies);
export default connect((mapStateToProps), { fetchData })
  (Movies);
