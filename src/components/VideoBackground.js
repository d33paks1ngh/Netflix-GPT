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
        className="w-screen -my-8 aspect-video overflow-hidden"
        width="100%"
        height="100%"
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        title="VENOM - THE LAST DANCE | OFFICIAL HINDI TRAILER | In Cinemas October 24"
        allow="accelerometer; autoplay;fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
