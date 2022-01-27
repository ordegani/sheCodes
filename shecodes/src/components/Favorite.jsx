import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie/Movie";
import "./Movies/MoviesList.css";

//which way is better - line 15 or line 24?
//TODO - deleteMovie

const Favorites = (props) => {
    const Flist = () => {
        if (props.favorites === []) {
            return "empty"
        }
        console.log(props.favorites);
        return props.favorites.map((movie) => {
            return (
                <Movie
                    movie_title={movie.title}
                    movie_name={movie.name}
                    movie_posterPath={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                    movie_voteAverage={movie.vote_average}
                    movie_releaseDate={movie.release_date}
                    movie_overview={movie.overview}
                    onFavoriteClick={() => props.deleteMovie(movie)}

                ></Movie>);
            // return (
            //     <div className="movie_item">
            //         <div className="favorites_listContainer">
            //             <div className="favorite" key={favorite.id}>
            //                 <div className="movie_title">⭐  </div>


            //             </div>
            //         </div>
            //     // </div>
            // );
        });
    }
    return (<div className="movies_listContainer">{Flist()}</div>);

};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        saveMovie: state.saveMovie,
    };
}



export default connect(mapStateToProps,
)(Favorites);
