import Link from "next/link";
import UserIcon from "./icons/UserIcon";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

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
        {session.user.image && (
          <span style={{ backgroundImage: `url('${session.user.image}')` }} />
        )}
        <span>
          <small>Signed in as</small>
          <br />
          <strong>{session.user.email ?? session.user.name}</strong>
        </span>
        <a
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
