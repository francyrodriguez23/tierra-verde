import Link from "next/link";
import { Share2, Heart } from "lucide-react";
import { Logo } from "@/components/atoms";

interface DetailNavProps {
  title: string;
}

export default function DetailNav({ title }: DetailNavProps) {
  return (
    <nav className="flex items-center justify-between bg-white px-4 md:px-10 lg:px-20 py-3 border-b border-stroke-light w-full">
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="flex items-center gap-1.5 text-[13px]">
          <span className="hidden md:inline text-text-placeholder">/</span>
          <Link href="/propiedades" className="hidden md:inline text-text-muted font-medium hover:text-primary-dark">
            Propiedades
          </Link>
          <span className="hidden md:inline text-text-placeholder">/</span>
          <span className="text-text-heading font-semibold text-base md:text-[13px]">{title}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="inline-flex items-center gap-1.5 border border-stroke-light rounded-lg px-3.5 py-2 text-[13px] font-medium text-text-body hover:bg-bg-gray-light transition-colors cursor-pointer">
          <Share2 size={14} className="text-text-muted" />
          <span className="hidden sm:inline">Compartir</span>
        </button>
        <button className="inline-flex items-center gap-1.5 border border-stroke-light rounded-lg px-3.5 py-2 text-[13px] font-medium text-text-body hover:bg-bg-gray-light transition-colors cursor-pointer">
          <Heart size={14} className="text-text-muted" />
          <span className="hidden sm:inline">Guardar</span>
        </button>
      </div>
    </nav>
  );
}
