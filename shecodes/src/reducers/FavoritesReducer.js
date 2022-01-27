const favoriteReducer = (favorites = [], action) => {
    if (action.type === "MOVIE_SAVED_TO_FAVORITES"){
    return [...favorites, action.payload]
    };
    return favorites;
}

export default favoriteReducer;