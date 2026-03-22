import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled;

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "font-bold tracking-widest uppercase",
        "text-sm px-6 py-3",
        "border-black border-2",
        // Transitions
        "transition-all duration-150 ease-in-out select-none outline-none cursor-pointer",
        // Hover — lift + hard black shadow
        !disabled && "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000]",
        // Active — snap back
        !disabled && "active:translate-x-0 active:translate-y-0 active:shadow-none",
        // Focus
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-600",
        // Disabled
        disabled && "cursor-not-allowed opacity-40",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      <span
        className={clsx("flex items-center gap-2")}
      >
        {children}
      </span>
    </button>
  );
};

export { Button };
export type { ButtonProps };
