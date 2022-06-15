import React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Filter({ setFilter, filter }) {
  return (
    <div id="filter">
      <div className="blackGround"></div>
      <h1 className="landingPage-info">Welcome to HackFlix</h1>
      <p className="landingPage-info">See what's next!</p>
      <div className="center rating">
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={filter}
          onChange={(e) => {
            setFilter(parseInt(e.target.value));
          }}
          max={10}
        />
      </div>
    </div>
  );
}

export default Filter;
