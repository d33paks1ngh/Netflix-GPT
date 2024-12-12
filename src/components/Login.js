import React from "react";
import Header from "./Header";
import { LOGIN_PAGE_BG_IMG } from "../utils/constants";

const Login = () => {
  return (
    <div className="flex relative h-screen">
      <Header />
      <img className="w-full" src={LOGIN_PAGE_BG_IMG} alt="bg-img" />
      <div className="absolute bottom-0 top-24 mx-auto  inset-0 w-4/12  bg-black text-white p-8 border-2 border-black rounded-xl bg-opacity-70">
        <form className="w-8/12 mx-auto ">
          <h1 className="font-bold text-2xl m-2 p-2">Sign In</h1>
          <input
            className="bg-opacity-70 border-2 border-slate-400 w-full m-2 p-2  rounded-l bg-black"
            type="text"
            placeholder="Email or mobile number"
          />
          <input
            className="border-2 border-slate-400 w-full m-2 p-2 rounded-l  bg-black bg-opacity-70"
            type="password"
            placeholder="Password"
          />
          <button className="w-full m-2 p-2 rounded-xl bg-red-600">
            Sign In
          </button>
          <p className="text-light text-slate-800 text-center w-full p-2">OR</p>
          <button className="w-full mx-2 p-2 rounded-xl bg-gray-400 bg-opacity-70">
            Use a sign-in code
          </button>
          <p className="text-light text-center w-full  p-2">Forget Password?</p>
          <input id="first" type="checkbox" className="m-2 p-2" />
          <label for="first" class="ms-2 text-sm font-medium">
            Remember me
          </label>
          <p className="text-light text-left w-full  p-2">
            New to Netflix?<spam>Sign up now</spam>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
