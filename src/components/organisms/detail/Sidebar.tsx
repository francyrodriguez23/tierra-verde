import { Phone, Calendar, Calculator } from "lucide-react";

interface SidebarProps {
  price: string;
  pricePerHectare: string;
  area: string;
}

export default function Sidebar({ price, pricePerHectare, area }: SidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-[360px] shrink-0">
      <div className="flex flex-col gap-5 border border-stroke-light rounded-xl p-7 sticky top-8">
        {/* Price */}
        <div className="flex flex-col gap-1">
          <span className="text-[28px] font-bold text-text-heading -tracking-wide">{price}</span>
          <span className="text-[13px] text-text-muted">
            {pricePerHectare} / hectárea · {area}
          </span>
        </div>

        {/* CTA buttons */}
        <button className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-[10px] hover:bg-primary-dark/90 transition-colors cursor-pointer w-full">
          <Phone size={18} />
          Contactar Propietario
        </button>
        <button className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-semibold px-7 py-3.5 rounded-[10px] border border-stroke-light hover:bg-bg-gray-light transition-colors cursor-pointer w-full">
          <Calendar size={18} />
          Agendar Visita
        </button>

        <div className="h-px bg-stroke-light" />

        {/* Financing calculator */}
        <div className="flex items-center gap-1.5">
          <Calculator size={16} className="text-primary-dark" />
          <span className="text-[13px] font-semibold text-text-heading">Calculadora de financiamiento</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Cuota inicial (30%)</span>
          <span className="text-xs font-semibold text-text-heading">$666M</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Financiado (70%)</span>
          <span className="text-xs font-semibold text-text-heading">$1.554M</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Cuota mensual (15 años)</span>
          <span className="text-[13px] font-bold text-primary-green">$16.8M</span>
        </div>
      </div>
    </aside>
  );
}
