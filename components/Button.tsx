import classNames from "classnames";
import Link from "next/link";

type ButtonVariant = "primary" | "outlined";
type ButtonSize = "md" | "sm";
type ButtonType = "button" | "link";

const ButtonVariantClassName = {
  primary: {
    base: "bg-green-300 text-white",
    hover: "hover:bg-green-200",
    disabled: "disabled:bg-green-300",
  },
  outlined: {
    base: "bg-white text-green-300 border border-solid border-green-300",
    hover: "hover:bg-green-400",
    disabled: "disabled:bg-white",
  },
};

const ButtonSizeClassName = {
  base: "text-xs pt-5 pr-9 pb-4 pl-9",
  sm: "",
  md: "",
};

ButtonSizeClassName.md =
  ButtonSizeClassName.base + " md:text-base md:pt-6 md:pr-11 md:pb-5 md:pl-12";

interface ButtonProps {
  type?: ButtonType;
  href?: string;
  variant: ButtonVariant;
  size: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
  disabled?: boolean;
}

const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  href = "",
  children,
  disabled = false,
}: ButtonProps) => {
  if (type === "link") {
    return (
      <Link href={href}>
        <a
          className={classNames(
            "transition",
            ButtonVariantClassName[variant].base,
            ButtonVariantClassName[variant].hover,
            ButtonVariantClassName[variant].disabled,
            ButtonSizeClassName[size]
          )}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classNames(
        "transition",
        ButtonVariantClassName[variant].base,
        ButtonVariantClassName[variant].hover,
        ButtonVariantClassName[variant].disabled,
        ButtonSizeClassName[size]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  size: "md",
};

export default Button;
