import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "../Movies/MoviesList.css";
import "./FavoriteList.css";

const FavoritesList = (props) => {
    const Flist = () => {
        if (props.favorites.length == 0) {
           return(
               <h3 style={{color:"yellow", margin:"10%"}}>[ I'm an empty list ]</h3>
           )
        }

        return props.favorites.map((movie, index) => {
            return (
                <Movie
                    key={index}
                    movie_title={movie.title ? movie.title : movie.Title}
                    movie_name={movie.name}
                    movie_posterPath={movie.poster_path ? "https://image.tmdb.org/t/p/original" + movie.poster_path : movie.Poster}
                    movie_voteAverage={movie.vote_average}
                    movie_releaseDate={movie.release_date}
                    onFavoriteClick={() => props.deleted(movie)}
                    movie_overview={movie.overview ? movie.overview : movie.Plot}
                    text="remove"
                ></Movie>);
        });
       
    }
    return (<div className="movies_listContainer"><button onClick={props.removeAll}>remove all</button>{Flist()}</div>);
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        movies: state.movies
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleted: (movie) => {
            console.log(movie);
            dispatch({ type: "MOVIE_DELETED", payload: movie })
        },
        removeAll: ()=>{dispatch ({type: "removeAll"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps
)(FavoritesList);
