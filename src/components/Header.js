import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="w-48 mx-36 bg-gradient-to-b from-black  z-10 absolute">
      <img src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
