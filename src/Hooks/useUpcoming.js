import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";
const useUpcoming = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.
  const upcoming = useSelector((store) => store.movies.upcoming);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcoming && getUpcomingMovies();
  }, []);
};
export default useUpcoming;
