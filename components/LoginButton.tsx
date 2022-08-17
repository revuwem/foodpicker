import UserIcon from "./icons/UserIcon";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import MenuLink from "./MenuLink";

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
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
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
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    href="/profile"
                    className={`group flex w-full items-center px-3 py-3 text-sm text-green-100 capitalize ${
                      active ? `bg-slate-100` : ``
                    }`}
                  >
                    Saved recipes
                  </MenuLink>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    href="/profile"
                    className={`group flex w-full items-center px-3 py-3 text-sm text-green-100 capitalize ${
                      active ? `bg-slate-100` : ``
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign Out
                  </MenuLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return null;
};

export default LoginButton;
