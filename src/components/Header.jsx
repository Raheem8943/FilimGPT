import Logo from "./Logo";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 px-4 py-2 w-full z-10 flex items-start justify-start">
      {/* <img src="src/assets/FilimGPT_Logo.svg" alt="filimgpt logo" /> */}
      <Logo />
    </div>
  );
};
export default Header;
