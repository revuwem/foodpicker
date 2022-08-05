import classNames from "classnames";

type ButtonVariant = "primary" | "outlined";
type ButtonSize = "md" | "sm";

const ButtonVariantClassName = {
  primary: {
    base: "bg-green-300 text-white",
    hover: "hover:bg-green-200",
  },
  outlined: {
    base: "bg-white text-green-300 border border-solid border-green-300",
    hover: "hover:bg-green-400",
  },
};

const ButtonSizeClassName = {
  md: "text-base pt-6 pr-11 pb-5 pl-12",
  sm: "",
};

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "transition",
        ButtonVariantClassName[variant].base,
        ButtonVariantClassName[variant].hover,
        ButtonSizeClassName[size]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
};

export default Button;
