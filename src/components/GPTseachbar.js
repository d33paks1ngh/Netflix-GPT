import React, { useRef } from "react";
import language from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import client from "../utils/openai";

const GPTseachbar = () => {
  //   const handleform = (e) => e.preventdefault();

  const searchText = useRef(null);

  const handleGPTsearch = async () => {
    console.log(searchText.current.value);
    // make an API call to GPT API and get Movie Results.
    const gptPromt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const GPTresults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptPromt }],
      model: "gpt-3.5-turbo",
    });
    console.log(GPTresults.choices);
  };
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="mt-24  m-auto w-6/12 bg-black bg-opacity-50 relative z-20 rounded-xl">
      <form
        className=" text-white font-medium grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9 rounded-xl bg-transparent border-[2px] border-cyan-100"
          ref={searchText}
          type="text"
          placeholder={language[langkey].GPTinputText}
        />
        <button
          className="hover:scale-90 ease-in-out duration-200 font-bold text-lg mr-2 col-span-3 h-[48px] mt-[20px] rounded-xl bg-red-600"
          onClick={handleGPTsearch}
        >
          {language[langkey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTseachbar;
