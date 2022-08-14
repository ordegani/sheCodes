 const movies = (state = [], action) => {
  if (action.type === "FETCHED_DATA") {
    return action.payload;
  }
  return state;
};

export default movies;


//usually a switch statement will be used:
//sometimes the reducer going to care about several types and to handle that we will use switch. here it is not the case.