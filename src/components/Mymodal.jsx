import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Link } from "react-router-dom";

function MyModal({ open, setOpen, movie }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1b1d27",
    color: "white",
    border: "none",
    boxShadow: 24,
    p: 4,
    padding: "none",
  };
  const value = Math.round(movie.vote_average);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          className="modelImg"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <div style={{ padding: "20px" }}>
          <div className="playIconDiv">
            <Link to={`/pelicula/${movie.id}`}>
              <PlayCircleIcon style={{ fontSize: "30px" }} />
            </Link>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.title}
          </Typography>
          <Typography
            className="overView"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {movie.overview}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="center">
              <Rating name="read-only" value={value} readOnly max={10} />
            </div>
          </Typography>
        </div>
      </Box>
    </Modal>
  );
}

export default MyModal;
