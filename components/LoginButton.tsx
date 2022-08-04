import Link from "next/link";
import UserIcon from "./icons/UserIcon";

const LoginButton = () => {
  return (
    <Link href="/">
      <a href="#" className="flex gap-2 items-center h-full">
        <span className="w-4 md:w-6">
          <UserIcon />
        </span>
        <span className="text-sm md:text-base capitalize">Log in</span>
      </a>
    </Link>
  );
};

export default LoginButton;
