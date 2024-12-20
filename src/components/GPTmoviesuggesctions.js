import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTmoviesuggesctions = () => {
  const MovieNames = useSelector((store) => store.showGPT.MovieNames);
  const MovieResults = useSelector((store) => store.showGPT.MovieResults);
  console.log(MovieNames);
  console.log(MovieResults);
  if (!MovieNames) return null;
  if (!MovieResults) return null;
  return (
    <div className=" bg-black bg-opacity-80 relative z-20">
      {/* <MovieList title={MovieNames[1]} movies={MovieResults[2]} /> */}
      {MovieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={MovieResults[index]} />
      ))}
    </div>
  );
};

export default GPTmoviesuggesctions;
