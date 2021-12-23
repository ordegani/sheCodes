import imdb from "../apis/imdb";

export const fetchData = () => async (dispatch) => {
    const response = await imdb.get("/");
  
    dispatch({ type: "FETCHED_DATA", payload: response.results });
  };