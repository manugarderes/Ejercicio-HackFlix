import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Mymodal from "./Mymodal";
import Rating from "@mui/material/Rating";

function Movie({ movie }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className="pelicula">
      <Mymodal setOpen={setOpen} open={open} movie={movie}/>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
    </div>
  );
}

export default Movie;
