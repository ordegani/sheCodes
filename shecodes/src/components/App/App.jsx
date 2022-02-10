import React from "react";
import FavoriteList from "../FavoritesList/FavoriteList";
import MoviesList from "../Movies/MoviesList";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {

//tester:
  // function App() {
    // useEffect(() => {
//       const fetch = async () => {
//         const data = await axios.get("http://localhost:5000/blogs");
//         console.log(data);
//       };
//       fetch();
//     }, [blogs])}
// //
// axios
// .post("http://localhost:5000/blogs", blog)
// .then((res) => console.log(res));

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<MoviesList />} />
        <Route path='/favorites' exact element={<FavoriteList />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
