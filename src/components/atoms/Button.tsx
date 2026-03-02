import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "primary-white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary-dark text-white hover:bg-primary-dark/90",
  secondary:
    "bg-bg-white text-primary-dark border border-stroke-light hover:bg-bg-gray-light",
  outline:
    "border border-stroke-medium text-primary-dark hover:bg-bg-gray-light",
  ghost:
    "text-primary-dark hover:bg-bg-gray-light",
  "primary-white":
    "bg-white text-primary-dark hover:bg-white/90",
};

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-[10px] transition-colors cursor-pointer";
  const size = variant === "outline" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base";

  return (
    <button className={`${base} ${size} ${variantStyles[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}
