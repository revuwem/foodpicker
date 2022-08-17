import Link from "next/link";
import { forwardRef, ReactNode } from "react";

type MenuLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: any) => void;
};

type MenuLinkRef = HTMLAnchorElement;

const MenuLink = forwardRef<MenuLinkRef, MenuLinkProps>((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default MenuLink;
