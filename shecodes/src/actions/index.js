import imdb from "../apis/imdb";


//avoid the error message "use custom middleware for async actions" by using redux thunk 
// (redux thunk not used onle for async functions - but does that a lot)
// (another use - return fron action creator a function)
// it is interesig when we return a function. if it's not a function - then we just have reducers with no middlemen, of course
// when thunk sees we return a function it will call it with dispatch and getState functions:
export const fetchData = () => async (dispatch, getState) => {
    const response = await imdb.get("/");
  
    dispatch({ type: "FETCHED_DATA", payload: response.results });
  };