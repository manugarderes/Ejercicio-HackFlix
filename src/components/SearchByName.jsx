import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Movie from "./Movie";

function SearchByName() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`
      )
      .then((result) => {
        setMovies(result.data.results);
        setLoading(false);
      }).catch((error) =>{
         setMovies()
         setLoading(false)
        });
  };
  return (
    <div id="SearchByName">
      {loading &&(
        <div className="center" style={{ paddingTop: "100px" }}>
          <CircularProgress />
        </div>
      )}
      <div className="center column">
        <input
          type="text"
          name="query"
          placeholder="Search By Name"
          onInput={(e) => handleInput(e)}
        />
      </div>
      {!loading &&(
        <div className="box" style={{ marginTop: "50px" }}>
          {movies &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      )}
    </div>
  );
}

export default SearchByName;
