import React from "react";

const GPTseachbar = () => {
  //   const handleform = (e) => e.preventdefault();
  return (
    <div className="mt-24  m-auto w-6/12 bg-black bg-opacity-50 relative z-20 rounded-xl">
      <form className=" text-white font-medium grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-xl bg-transparent border-[2px] border-cyan-100"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="font-bold text-lg mr-2 col-span-3 h-[48px] mt-[20px] rounded-xl bg-red-600">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTseachbar;
