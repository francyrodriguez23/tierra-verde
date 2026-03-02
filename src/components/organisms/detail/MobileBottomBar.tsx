import { Phone } from "lucide-react";

interface MobileBottomBarProps {
  price: string;
  pricePerHectare: string;
  area: string;
}

export default function MobileBottomBar({ price, pricePerHectare, area }: MobileBottomBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-t border-stroke-light px-4 py-3">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-text-heading">{price}</span>
        <span className="text-[11px] text-text-muted">
          {pricePerHectare}/ha · {area}
        </span>
      </div>
      <button className="inline-flex items-center gap-2 bg-primary-dark text-white font-semibold text-sm px-6 py-3 rounded-[10px] cursor-pointer">
        <Phone size={16} />
        Contactar
      </button>
    </div>
  );
}
