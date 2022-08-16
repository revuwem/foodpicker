import UserIcon from "./icons/UserIcon";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <a
        href={`/api/auth/signin`}
        className="flex gap-2 items-center h-full"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        <span className="w-4 md:w-6">
          <UserIcon />
        </span>
        <span className="text-sm md:text-base capitalize">Sign In</span>
      </a>
    );
  }

  if (session?.user) {
    return (
      <>
        <a href="/profile" className="h-full flex items-center">
          <div className="flex items-end gap-2">
            {session.user.image && (
              <img
                src={session.user.image}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            )}
            <span>
              {session.user.name?.split(" ")[0] || session.user.email}
            </span>
          </div>
        </a>
        <a
          hidden
          href={`/api/auth/signout`}
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign out
        </a>
      </>
    );
  }
};

export default LoginButton;
