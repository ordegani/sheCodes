import { combineReducers } from "redux";
import movies from "./moviesReducer";
import favoriteReducer from "./favoritesReducer";
// import deletedReducer from "./deletedReducer";

//seperate the reducers to different files (for good order in big projects)
//redusers must be pure!! It can only use it's two parameters (=the previous state and the action value) to decide what to do!
//for instance - they cannot make an API request
//data massaging on the two parameters is allowed. I can loop, flter etc` if I use only the two. 
//numbers and strings are not easily changed , they are not mutable. arrays and objects are. state mutating is forbidden as well, in general - but usually it presents no problem. one exceptional:
//all reducres created a new array in the memory!
// see https://www.udemy.com/course/react-redux/learn/lecture/12586898#overview minute 1:30 - yellow and green table

export default combineReducers({
    movies: movies,
    favorites: favoriteReducer,
    // deleted: deletedReducer,
});
