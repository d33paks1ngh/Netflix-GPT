import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendinTV } from "../utils/moviesSlice";
const useTrendingTV = () => {
  // fetch data from TMDB API and update the moviesSlice and update the store.
  const TrendingTV = useSelector((store) => store.movies.trendingTV);
  const dispatch = useDispatch();
  const getTrendingTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendinTV(json.results));
  };

  useEffect(() => {
    !TrendingTV && getTrendingTV();
  }, []);
};
export default useTrendingTV;
