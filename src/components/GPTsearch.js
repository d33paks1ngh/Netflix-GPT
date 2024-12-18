import React from "react";
import GPTmoviesuggesctions from "./GPTmoviesuggesctions";
import GPTseachbar from "./GPTseachbar";
import { LOGIN_PAGE_BG_IMG } from "../utils/constants";

const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -mt-24">
        <img className="w-screen h-screen " src={LOGIN_PAGE_BG_IMG} alt="bg-img" />
      </div>
      <GPTseachbar />
      <GPTmoviesuggesctions />
    </div>
  );
};

export default GPTsearch;