import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";
const useTopRated = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.
  const TopRated = useSelector((store) => store.movies.topRated);
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !TopRated && getTopRatedMovies();
  }, []);
};
export default useTopRated;
