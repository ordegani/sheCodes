import React, { useEffect, useState } from "react";

const SearchForFilm = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(search);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getMovie = async () => {
    const apikey = `b8dd69ac`;
    const response = await fetch(
      `http://www.omdbapi.com/?t=${query}&apikey=${apikey}`
    );
    const data = await response.json();

    setMovie(data);
  };
  console.log(movie);

  useEffect(() => {
    getMovie();
  }, [query]);

  return (
    <div className="Scontainer">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-field"
          placeholder="choose film"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          ▶
        </button>
      </form>
      <div className="SmovieContainer">
        <div className="movieInformation">
          <h1>{movie.Title}</h1>
          <p>{movie.Director}</p>
          <img src={movie.Poster} alt="" />
          <h3>{movie.Plot}</h3>
          <p>{movie.Year}</p>
          <p>{movie.Country}</p>
          <p>{movie.Language}</p>
          <p>{movie.Genre}</p>
          <p>{movie.Actors}</p>
          <p>{movie.Runtime}</p>
          {useEffect(() => {
            <p>Rating: {movie.imdbRating}</p>;
          }, [movie])}
        </div>
      </div>
    </div>
  );
};

export default SearchForFilm;
