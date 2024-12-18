import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { ToggleshowGPTsearch } from "../utils/GPTslice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component get unmount
    return () => unsubscribe();
  }, []);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTClick = () => {
    dispatch(ToggleshowGPTsearch());
  };

  return (
    <div className="w-[100%] absolute top-0  bg-gradient-to-b from-black  z-20  flex justify-between items-center">
      <img className="w-36 mx-12" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex gap-2">
          <button
            onClick={handleGPTClick}
            className="hover:scale-125 ease-in-out duration-500 hover:opacity-90 font-bold text-small text-white px-2 my-4 h-8 rounded-lg bg-red-600"
          >
            🚀GPT+
          </button>
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
