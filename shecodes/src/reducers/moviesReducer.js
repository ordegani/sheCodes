 const movies = (state = [], action) => {
  if (action.type === "FETCHED_DATA") {
    return action.payload;
  }
  //in case it is not type "FETCHED_DATA":
  return state;
};

//usually a switch statement will be used:
//sometimes the reducer going to care about several types and to handle that we will use switch. here it is not the case.

//export const movies = (state = [], action) => {
// switch (action.type){
//     case "FETCHED_DATA":
//         return action.payload;
//         default:
//             return state;
// }
// };
export default movies;