import LoginButton from "./LoginButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-24 pl-9 pr-8 flex items-center justify-between">
      <Logo />
      <LoginButton />
    </header>
  );
};

export default Header;
