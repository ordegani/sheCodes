import { bindActionCreators } from "redux";
import imdb from "../apis/imdb";
import favoriteReducer from "../reducers/favoritesReducer";

//avoid the error message "use custom middleware for async actions" by using redux thunk
// (redux thunk not used onle for async functions - but does that a lot)
// (another use - return fron action creator a function)
// it is interesig when we return a function. if it's not a function - then we just have reducers with no middlemen, of course
// when thunk sees we return a function it will call it with dispatch (=power to change data on the redux side) and getState (=vise versa) functions:

export const fetchData = () => async (dispatch, getState) => {
  //getState is not used here and is passed as parameter just for better personal learning
  const response = await imdb.get("/");
  //I dont need to use return in a function (thus - when I use thunk). instead I  can easily write like below.
  //dispatch here is being used instead of return (return{type,payload})!
  dispatch({ type: "FETCHED_DATA", payload: response?.data?.results });
};

// unshortened way of writing the above action would be the following: as we see - we have a function inside the fetchData action, which is possible thanks to using thunk.

//export const fetchData = () => {
//     return async function(dispatch, getState){
//         const response = await imdb.get("/");

//         dispatch({ type: "FETCHED_DATA", payload: response.results });
//     }
// }

export const saveMovie = (movie) => {

  return{
  action: "MOVIE_SAVED_TO_FAVORITES",
  payload: movie,
};
}