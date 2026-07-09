import { classNames } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `flex items-center justify-center gap-2 text-sm cursor-pointer text-foreaground2 transition-all bg-transparent max-sm:h-10`,
  {
    variants: {
      variant: {
        num: "max-sm:h-auto",
        log: "w-[100px] h-12 bg-secondary hover:bg-foreaground2 hover:text-white max-sm:w-[90px] max-sm:h-10",
        bet: "w-[140px] h-12 bg-secondary border border-secondary hover:bg-foreaground3 hover:text-secondary max-sm:w-[120px] max-sm:h-10",
        "orange-border":
          "w-[140px] h-12 bg-foreaground3 border-secondary text-secondary hover:bg-secondary hover:text-foreaground3 max-sm:w-[120px] max-sm:h-10",
        clear:
          "ml-2 w-[98px] h-12 bg-error text-white  hover:bg-error-dark max-sm:h-10",
        search: "max-sm:w-4 max-sm:h-4",
        edit: " text-xs opacity-50 text-white self-start mt-4 hover:opacity-100",
        orange:
          "h-12 bg-secondary hover:bg-foreaground2 hover:text-secondary max-sm:h-10",
        logout: "opacity-50 hover:opacity-100 max-sm:[&>.btn-text]:hidden",
        close: "text-secondary",
      },
    },
  },
);
type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    disabled?: boolean;
  };

export default function Button({
  className,
  variant,
  children,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(buttonVariants({ variant }), className)}
      {...rest}
    >
      {iconLeft}
      <span className="btn-text">{children}</span>
      {iconRight}
    </button>
  );
}
