import React, { useRef } from "react";
import language from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult, addGptMovieName } from "../utils/GPTslice";
import Groq from "groq-sdk";
import { GROQ_API_KEY } from "../utils/constants";
const GPTseachbar = () => {
  const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  // const handleform = (e) => e.preventdefault();

  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const show = useSelector((store) => store.showGPT.show);
  // console.log(process.env.REACT_APP_GROQ_API_KEY);

  // Search movies from TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // async function getGroqChatCompletion() {
  //   const prompt = `Give me 5 movie names in the form of string seperated by comma according to the prompt given ahead. Don't give any other text expect movie names. The prompt is - ${searchText.current.value}`;
  //   return groq.chat.completions.create({
  //     messages: [
  //       {
  //         role: "user",
  //         content: prompt,
  //       },
  //     ],
  //     model: "llama3-8b-8192",
  //   });
  // }

  const handleGPTsearch = async () => {
    // console.log(searchText.current.value);
    const prompt = `Give me 5 movie names in the form of string seperated by comma according to the prompt given ahead. Don't give any other text expect movie names. The prompt is - ${searchText.current.value}`;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });
    // console.log(chatCompletion.choices[0]?.message?.content || "");
    if (!chatCompletion.choices) {
      // error handiling
    }
    const gptMovies = chatCompletion.choices[0]?.message?.content.split(",");
    // console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // console.log(promiseArray);
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(addGptMovieResult(tmdbResults));
    dispatch(addGptMovieName(gptMovies));
  };

  return (
    <div className="mt-24 mb-4  m-auto w-6/12 bg-black bg-opacity-50 relative z-20 rounded-xl">
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
