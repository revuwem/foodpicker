import Link from "next/link";
import Container from "./Container";
import LogoIcon from "./icons/LogoIcon";

const Footer = () => {
  return (
    <Container>
      <footer className="h-16 flex justify-center md:justify-between items-center flex-wrap">
        <div className="grid grid-cols-2 justify-items-center items-center gap-3">
          <span className="w-24 md:w-32 md:mb-1">
            <LogoIcon />
          </span>
          <Link href="/policy">
            <a className="text-xs md:text-base hover:underline md:mb-1">
              Policy
            </a>
          </Link>
        </div>

        <p className="text-xs md:text-base">
          Made with 💜 by <a href="https://github.com/revuwem">revuwem</a>{" "}
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
