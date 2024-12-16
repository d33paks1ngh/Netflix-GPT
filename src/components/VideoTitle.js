import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="my-48 w-screen mx-12  text-green ">
      <div className="w-4/12 ">
        <h1 className="font-bold text-4xl  my-8">{title}</h1>
        <h1 className="font-medium text-sm">{overview}</h1>
      </div>
      <div className=" font-bold my-2 ">
        <button className="bg-gray-400 py-2 px-4 rounded-lg w-24 ">
          ▷ Play
        </button>
        <button className="bg-gray-200 mx-4 py-2 px-4 rounded-lg ">
          🌐More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
