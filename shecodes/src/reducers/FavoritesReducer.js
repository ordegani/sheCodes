const favoriteReducer = (favorites = [], action) => {
    if (action.type === "MOVIE_SAVED_TO_FAVORITES") {
        favorites = favorites.filter((favorite) => favorite.title !== action.payload.title);

        return [...favorites, action.payload]
    };
    if (action.type === "MOVIE_DELETED") {

        favorites = favorites.filter((favorite) => favorite.title !== action.payload.title);


        return favorites;
    };
    return favorites;
}

export default favoriteReducer;