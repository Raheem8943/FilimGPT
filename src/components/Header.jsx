import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AvatarLogo } from "../utils/Constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error signing out:", error);
        navigate("/Error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute top-0 left-0 px-4 py-2 w-screen bg-gradient-to-b from-black z-10 flex items-center justify-between cursor-default">
      {/* <img src="src/assets/FilimGPT_Logo.svg" alt="filimgpt logo" /> */}
      <Logo />

      {user && (
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-lg overflow-hidden hover:opacity-80 transition bg-gray-700 flex items-center justify-center">
            <img
              src={AvatarLogo}
              alt="user_avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handleSignOut}
            className="text-white font-bold px-4 py-2 mr-2 bg-red-600 rounded hover:bg-red-700 transition cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
