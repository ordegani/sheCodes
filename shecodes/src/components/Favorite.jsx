import React from "react";
import { connect } from "react-redux";

const Favorites = (props) => {

    if (props.favorites === []) {
        return "empty"
    }
    console.log(props.favorites);
    return props.favorites.map((favorite) => {
        return (
            <div className="favoriteList">
                <div className="favorite" key={favorite.movie_title}>
                    ⭐{favorite.movie_title}
                </div>
            </div>
        );
    });
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        saveMovie: state.saveMovie,
    };
}



export default connect(mapStateToProps,
)(Favorites);
