import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import NoResult from "./NoResult";
import InfiniteScroll from "react-infinite-scroll-component";
import Filter from "./Filter";

function Hackflix() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState(0);
  const [page, setPage] = useState(2);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .then((result) => setMovies(result.data.results));
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then((result) => setMovies([...movies, ...result.data.results]));
  };

  return (
    <div id="Movies">
      <div className="backScreen"></div>
      <InfiniteScroll
        dataLength={movies}
        next={handleNextPage}
        hasMore={true}
        scrollableTarget="scrollableDiv"
      >
        <div>
          <div>
            <Filter setFilter={setFilter} filter={filter} />
            <div className="box">
              <NoResult movies={movies} filter={filter} />
              {movies &&
                movies
                  .filter((movie) => movie.vote_average >= filter - 1)
                  .map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Hackflix;
