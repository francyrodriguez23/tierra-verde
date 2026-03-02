interface SectionLabelProps {
  children: string;
  color?: "dark" | "mint";
}

export default function SectionLabel({ children, color = "dark" }: SectionLabelProps) {
  const textColor = color === "dark" ? "text-primary-dark" : "text-primary-mint";

  return (
    <span className={`text-xs font-semibold tracking-[2px] uppercase ${textColor}`}>
      {children}
    </span>
  );
}
