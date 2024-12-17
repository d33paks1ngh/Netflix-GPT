import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";
const useUpcoming = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.

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
    getUpcomingMovies();
  }, []);
};
export default useUpcoming;
