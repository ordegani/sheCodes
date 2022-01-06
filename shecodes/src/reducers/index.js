import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

//seperate the reducers to different files (for good order in big projects)

// export const movies = (state = [], action) => {
//   if (action.type === "FETCHED_DATA") {
//     return action.payload;
//   }
//   return state;
// };

export default combineReducers({
    movies: moviesReducer
});
