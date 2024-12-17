import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ backdrop_path }) => {
  //   const { backdrop_path, poster_path, original_title } = movies[0];
  return (
    <div className="">
      <div className="w-64">
        <img
          className="rounded-xl p-1 "
          src={IMG_CDN_URL + backdrop_path}
          alt="poster_img"
        />
      </div>
    </div>
  );
};

export default MovieCard;