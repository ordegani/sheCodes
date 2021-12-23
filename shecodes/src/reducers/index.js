export const movies = (state = [], action) => {
    if (action.type === "FETCHED_DATA") {
      return action.payload;
    }
    return state;
  };