import React from "react";
import language from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GPTseachbar = () => {
  //   const handleform = (e) => e.preventdefault();
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="mt-24  m-auto w-6/12 bg-black bg-opacity-50 relative z-20 rounded-xl">
      <form className=" text-white font-medium grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-xl bg-transparent border-[2px] border-cyan-100"
          type="text"
          placeholder={language[langkey].GPTinputText}
        />
        <button className="hover:scale-90 ease-in-out duration-200 font-bold text-lg mr-2 col-span-3 h-[48px] mt-[20px] rounded-xl bg-red-600">
          {language[langkey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTseachbar;
