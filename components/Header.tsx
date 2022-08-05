import Container from "./Container";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <Container>
      <header className="h-24 flex items-center justify-between">
        <Logo />
        <LoginButton />
      </header>
    </Container>
  );
};

export default Header;
