import React, { useState, useRef } from "react";
import Header from "./Header";
import { LOGIN_PAGE_BG_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [signInToggle, SetsignInToggle] = useState(true);

  const [errorMessage, seterrorMessage] = useState(null);
  const handle_sign_in_toggle = () => {
    SetsignInToggle(!signInToggle);
  };

  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
  };

  return (
    <div className="flex relative h-  bg-black">
      <Header />
      <img className="w-full" src={LOGIN_PAGE_BG_IMG} alt="bg-img" />
      <div className="absolute bottom-0 top-24 mx-auto  inset-0 w-4/12  bg-black text-white p-8 border-2 border-black rounded-xl bg-opacity-70">
        <form onSubmit={(e) => e.preventDefault()} className="w-8/12 mx-auto ">
          <h1 className="font-bold text-2xl m-2 p-2">
            {signInToggle ? "Sign In" : "Sign Up"}
          </h1>
          {!signInToggle && (
            <input
              // ref={name}
              className="bg-opacity-70 border-2 border-slate-400 w-full m-2 p-2  rounded-l bg-black"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="bg-opacity-70 border-2 border-slate-400 w-full m-2 p-2  rounded-l bg-black"
            type="text"
            placeholder="Email or mobile number"
          />
          <input
            ref={password}
            className="border-2 border-slate-400 w-full m-2 p-2 rounded-l  bg-black bg-opacity-70"
            type="password"
            placeholder="Password"
          />

          <p className="text-red-500 text-sm font-medium p-2 mx-2">
            {errorMessage}
          </p>

          <button
            onClick={handleButtonClick}
            className="w-full m-2 p-2 rounded-xl bg-red-600"
          >
            {signInToggle ? "Sign In" : "Sign Up"}
          </button>
          {signInToggle && (
            <p className="text-light text-slate-400 text-center w-full p-2">
              OR
            </p>
          )}
          {signInToggle && (
            <button className="w-full mx-2 p-2 rounded-xl bg-gray-400 bg-opacity-70">
              Use a sign-in code
            </button>
          )}

          {signInToggle && (
            <p className="text-light text-center w-full  p-2">
              Forget Password?
            </p>
          )}
          {signInToggle && (
            <input id="first" type="checkbox" className="m-2 p-2" />
          )}
          {signInToggle && <label htmlFor="first">Remember me</label>}
          <p className="text-light text-left w-full  p-2">
            {signInToggle ? "New to Netflix ? " : "Already registered ? "}
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={handle_sign_in_toggle}
            >
              {signInToggle ? "Sign Up" : "Sign in Now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
