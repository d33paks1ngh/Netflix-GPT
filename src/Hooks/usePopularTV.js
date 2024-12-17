import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTV } from "../utils/moviesSlice";
const usePopularTV = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.

  const dispatch = useDispatch();
  const getPopularTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularTV(json.results));
  };

  useEffect(() => {
    getPopularTV();
  }, []);
};
export default usePopularTV;
