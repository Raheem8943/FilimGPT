import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/Error");
      });
  };

  return (
    <div className="absolute top-0 left-0 px-4 py-2 w-screen bg-gradient-to-b from-black z-10 flex items-center justify-between">
      {/* <img src="src/assets/FilimGPT_Logo.svg" alt="filimgpt logo" /> */}
      <Logo />
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition bg-gray-700 flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="userlogo"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={handleSignOut}
          className="text-white font-bold px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default Header;
