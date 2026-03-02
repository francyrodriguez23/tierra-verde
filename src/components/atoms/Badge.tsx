import { type ReactNode } from "react";

type Variant = "verified" | "status" | "section-label" | "section-label-dark" | "price" | "hero-pill";

interface BadgeProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  verified:
    "bg-primary-dark/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px] gap-1",
  status:
    "bg-bg-light-green text-primary-green-dark text-[11px] font-medium px-2 py-1 rounded-[4px] gap-1",
  "section-label":
    "bg-bg-light-green text-primary-green-dark text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-stroke-green-light",
  "section-label-dark":
    "bg-overlay-white-15 text-primary-mint text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-white/20",
  price:
    "bg-overlay-white text-primary-dark text-[13px] font-bold px-3 py-1.5 rounded-[6px]",
  "hero-pill":
    "bg-overlay-white-15 text-white/80 text-[13px] font-medium px-4 py-1.5 rounded-full border border-white/30 gap-2",
};

export default function Badge({ variant = "status", icon, children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center ${variantStyles[variant]}`}>
      {icon}
      {children}
    </span>
  );
}
