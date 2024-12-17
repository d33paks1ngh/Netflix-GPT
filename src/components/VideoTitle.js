import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-10/12 h-screen aspect-video text-white bg-opacity-100 absolute bg-gradient-to-r from-black  py-48 px-12">
      <div className="w-4/12 ">
        <h1 className="font-bold text-4xl  my-8">{title}</h1>
        <h1 className="font-medium text-sm">{overview}</h1>
      </div>
      <div className=" font-bold my-2 ">
        <button className="bg-white text-black py-2 px-4 hover:opacity-90  rounded-lg w-24 ">
          ▷ Play
        </button>
        <button className="bg-[#a9301b] text-white hover:opacity-90 mx-4 py-2 px-4 rounded-lg ">
          🌐More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
