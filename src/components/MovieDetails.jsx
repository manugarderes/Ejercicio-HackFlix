import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((result) => {
        setMovie(result.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div className="center" style={{marginTop:"100px"}}>
          <CircularProgress />
        </div>
      )}
      {movie && !loading && (
        <div id="MovieDetails">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <div className="movieInfo">
            <h1>{movie.original_title}</h1>
            <h3>
              Overview: <br /> {movie.overview}
            </h3>
            <p>
              Generos :{" "}
              {movie.genres.map((genre, index) => (
                <span id={genre.id}>
                  {index !== 0 && ", "}
                  {genre.name}
                </span>
              ))}
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              Rating:{" "}
              <Rating
                name="read-only"
                value={Math.round(movie.vote_average)}
                readOnly
                max={10}
              />
            </p>
            <p>Idioma: {movie.original_language}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
