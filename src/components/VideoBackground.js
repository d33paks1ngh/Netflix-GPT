import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.nowPlayingTrailer);
  //   console.log(trailer);
  //   console.log(trailer);

  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video overflow-hidden"
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=&mute=1"
        }
        title="VENOM - THE LAST DANCE | OFFICIAL HINDI TRAILER | In Cinemas October 24"
        allow="accelerometer; autoplay;fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
