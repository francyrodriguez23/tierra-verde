import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <h4 className="text-[13px] font-semibold text-white tracking-wider">{title}</h4>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
