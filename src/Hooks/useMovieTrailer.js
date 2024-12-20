import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayTrailer } from "../utils/moviesSlice";

// fatch the trailer video && updating the store with trailer video data
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const NowPlayTrailer = useSelector((store) => store.movies.nowPlayingTrailer);
  //   console.log(movieId);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    // console.log(trailer);
    dispatch(addNowPlayTrailer(trailer));
  };

  useEffect(() => {
    !NowPlayTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
