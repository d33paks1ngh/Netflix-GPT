import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
const usePopularMovies = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.
  const popular = useSelector((store) => store.movies.popular);

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    !popular && getPopularMovies();
  }, []);
};
export default usePopularMovies;
