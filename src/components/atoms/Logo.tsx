import Link from "next/link";
import { Mountain } from "lucide-react";

interface LogoProps {
  color?: "dark" | "light";
  size?: "sm" | "md";
}

export default function Logo({ color = "dark", size = "md" }: LogoProps) {
  const textColor = color === "dark" ? "text-primary-dark" : "text-white";
  const iconColor = color === "dark" ? "text-primary-dark" : "text-primary-mint";
  const iconSize = size === "md" ? 28 : 24;
  const textSize = size === "md" ? "text-[22px]" : "text-xl";

  return (
    <Link href="/" className={`flex items-center gap-2.5 ${textColor}`}>
      <Mountain size={iconSize} className={iconColor} />
      <span className={`${textSize} font-bold -tracking-wide`}>TierraVerde</span>
    </Link>
  );
}
