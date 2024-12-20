import { API_OPTIONS } from "../utils/constants";
import { useEffect, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
const useTrendingMovies = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.
  const TrendingMovies = useSelector((store) => store.movies.trendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !TrendingMovies && getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
