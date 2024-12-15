import React from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { USER_IMG } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="w-screen  bg-gradient-to-b from-black  z-10 absolute flex justify-between">
      <img className="w-36 mx-36" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex gap-2">
          <img
            className="h-8 my-4 rounded-md"
            alt="userImg"
            src={user.photoURL}
          />
          <button
            onClick={handleSingOut}
            className=" mx-4 font-medium text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
