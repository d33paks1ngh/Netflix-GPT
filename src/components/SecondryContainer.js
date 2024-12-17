import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popular = useSelector((store) => store.movies.popular);
  const topRated = useSelector((store) => store.movies.topRated);
  const upcoming = useSelector((store) => store.movies.upcoming);
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const trendingTV = useSelector((store) => store.movies.trendingTV);
  const popularTV = useSelector((store) => store.movies.popularTV);
  const topRatedTV = useSelector((store) => store.movies.topRatedTV);

  return (
    <div className="bg-black">
      <div className="-mt-[230px] relative z-20">
        <MovieList title={"Trending Movies"} movies={trendingMovies} />
        <MovieList title={"Top rated Movies"} movies={topRated} />
        <MovieList title={"Popular TV Series"} movies={popularTV} />
        <MovieList title={"Upcoming Movies"} movies={upcoming} />
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Trending TV Series"} movies={trendingTV} />
        <MovieList title={"Top Rated TV Series"} movies={topRatedTV} />
        <MovieList title={"Popular Movies"} movies={popular} />
      </div>
    </div>
  );
};

export default SecondryContainer;
