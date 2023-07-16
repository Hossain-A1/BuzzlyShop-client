import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariance = cva(
  "px-6 py-3 duration-300 rounded-xl",

  {
    variants: {
      color: {
        green: "bg-accent1 text-light hover:bg-accent1/90",
        dark: "bg-dark text-light hover:bg-dark/90",
        light: "bg-light text-dark hover:bg-light/90",
        ghost: "bg-transparent text-dark hover:bg-dark/10",
      },
    },
    defaultVariants: {
      color: "green",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariance> {
  href: string;
  target?: string;
  placeholder: string;
}
const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(buttonVariance({ color }))}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
