import React from "react";

function NoResult({movies, filter}) {
  return (
    <div className="center">
      {movies &&
        movies.filter((movie) => movie.vote_average >= filter - 1).length ===
          0 && (
          <div className="center" style={{color:"white"}}>
            <p>NO RESULTS</p>
          </div>
        )}
    </div>
  );
}

export default NoResult;
