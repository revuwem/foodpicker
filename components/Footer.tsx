import Container from "./Container";
import LogoIcon from "./icons/LogoIcon";

const Footer = () => {
  return (
    <Container>
      <footer className="flex justify-between items-center">
        <span className="w-24 md:w-32 mb-1">
          <LogoIcon />
        </span>
        <p className="text-xs md:text-base">
          Made with 💜 by <a href="https://github.com/revuwem">revuwem</a>{" "}
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
