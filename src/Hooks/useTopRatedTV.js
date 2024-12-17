import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtopRatedTV } from "../utils/moviesSlice";
const useTopRatedTV = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.

  const dispatch = useDispatch();
  const getTopRatedTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addtopRatedTV(json.results));
  };

  useEffect(() => {
    getTopRatedTV();
  }, []);
};
export default useTopRatedTV;
