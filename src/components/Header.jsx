import Logo from "./Logo";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-10 w-full">
      <Logo />
    </div>
  );
};
export default Header;
