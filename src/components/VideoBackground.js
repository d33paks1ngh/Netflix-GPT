import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.addNowPlayTrailer);
  //   console.log(trailer);

  return (
    <div>
      <iframe
        width="988"
        height="556"
        src={"https://www.youtube.com/embed/VWB8RM9qHPg" + trailer?.key}
        title="VENOM - THE LAST DANCE | OFFICIAL HINDI TRAILER | In Cinemas October 24"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
