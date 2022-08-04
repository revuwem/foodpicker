import LogoIcon from "./icons/LogoIcon";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex gap-3 w-32 md:w-40 mb-1 md:mb-2 h-full items-center">
        <LogoIcon />
      </a>
    </Link>
  );
};

export default Logo;
