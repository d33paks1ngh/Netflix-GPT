import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="w-screen ">
      <h1 className="font-medium ml-8 text-white text-2xl pt-8 ">{title}</h1>
      <div className=" flex overflow-x-scroll scrollbar scrollbar-hide ">
        <div className="flex ml-8">
          {movies?.map(
            (movie) =>
              movie.backdrop_path && (
                <MovieCard key={movie.id} backdrop_path={movie.backdrop_path} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
