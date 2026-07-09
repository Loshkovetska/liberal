import { classNames } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  wrapperClass?: string;
  variant?: "dark" | "light";
};

export default function Input({
  className,
  children,
  iconLeft,
  iconRight,
  wrapperClass,
  variant = "light",
  ...rest
}: InputProps) {
  return (
    <div
      className={classNames(
        variant === "light" && "bg-white",
        variant === "dark" && "bg-primary-light",
        "flex items-center gap-3 h-12 px-4 max-sm:h-10",
        wrapperClass,
      )}
    >
      {iconLeft}
      <input
        className={classNames(
          "no-spinner calendar flex size-full grow bg-transparent hover:outline-none focus-within:outline-none pr-2 placeholder:text-sm placeholder:text-white/50 max-sm:h-10 max-sm:placeholder:text-xs",
          variant === "light" && "text-primary",
          variant === "dark" && "text-white",
        )}
        {...rest}
      />
      {iconRight}
    </div>
  );
}
