import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
}

export default function CategoryCard({ icon: Icon, title, description, count }: CategoryCardProps) {
  return (
    <Link href="/propiedades" className="flex flex-col gap-4 bg-white/[0.06] border border-white/20 rounded-xl p-5 md:p-7 flex-1 hover:bg-white/10 transition-colors cursor-pointer">
      <div className="w-[52px] h-[52px] rounded-xl bg-primary-mint/10 flex items-center justify-center">
        <Icon size={24} className="text-primary-mint" />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-sm text-white/65 leading-relaxed">{description}</p>

      <div className="flex items-center gap-1.5 pt-2.5">
        <span className="text-[13px] font-medium text-primary-mint">{count} propiedades</span>
        <ArrowRight size={14} className="text-primary-mint" />
      </div>
    </Link>
  );
}
