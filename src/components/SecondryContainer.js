import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-24 relative z-20">
        <MovieList title={"Top rated  movies"} movies={movies} />
        <MovieList title={"Trending Movies"} movies={movies} />
        <MovieList title={"Populor Movies"} movies={movies} />
        <MovieList title={"Upcoming Movies"} movies={movies} />
        <MovieList title={"Horrom Movies"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondryContainer;
