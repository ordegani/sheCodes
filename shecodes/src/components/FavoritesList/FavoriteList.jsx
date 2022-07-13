import React from "react";
import { connect } from "react-redux";
import Movie from "../Movie/Movie";
import "../Movies/MoviesList.css";

const FavoritesList = (props) => {
    const Flist = () => {
        if (props.favorites === []) {
            return "empty"
        }
        console.log(props.favorites);
        console.log(props.movies);
        return props.favorites.map((movie, index) => {
            return (
                <Movie
                    key={index}
                    movie_title={movie.title?movie.title: movie.Title}
                    movie_name={movie.name}
                    movie_posterPath={movie.poster_path? "https://image.tmdb.org/t/p/original" + movie.poster_path:movie.Poster}
                    movie_voteAverage={movie.vote_average}
                    movie_releaseDate={movie.release_date}
                    movie_overview={movie.overview}
                    onFavoriteClick={() => props.deleted(movie)}
                    text="remove"
                ></Movie>);

        });
    }
    return (<div className="movies_listContainer">{Flist()}</div>);

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps
)(FavoritesList);

//which way is better - line 15 or line 28?
            // option B:
            // return (
            //     <div className="movie_item">
            //         <div className="favorites_listContainer">
            //             <div className="favorite" key={favorite.id}>
            //                 <div className="movie_title">⭐  </div>


            //             </div>
            //         </div>
            //     // </div>
            // );

