import { MapPin, ShieldCheck, CircleCheck } from "lucide-react";

interface PropertySummaryProps {
  title: string;
  location: string;
  price: string;
  pricePerHectare: string;
  area: string;
}

export default function PropertySummary({
  title,
  location,
  price,
  pricePerHectare,
  area,
}: PropertySummaryProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl md:text-[32px] font-bold text-text-heading">{title}</h1>

      <div className="flex items-center gap-1.5">
        <MapPin size={16} className="text-text-muted" />
        <span className="text-sm text-text-muted">{location}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 bg-primary-dark/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
          <ShieldCheck size={12} className="text-primary-mint" />
          Verificada
        </span>
        <span className="inline-flex items-center gap-1 bg-bg-light-green text-primary-green-dark text-[11px] font-medium px-2 py-1 rounded-[4px]">
          <CircleCheck size={12} className="text-primary-green" />
          Disponible
        </span>
      </div>

      {/* Price - mobile only */}
      <p className="text-[28px] font-bold text-primary-green lg:hidden">{price}</p>

      {/* Key metrics */}
      <div className="flex rounded-[10px] border border-stroke-light mt-2">
        <div className="flex flex-col gap-1 flex-1 p-4">
          <span className="text-lg md:text-2xl font-bold text-primary-green">{price}</span>
          <span className="text-[13px] text-text-muted">Precio total</span>
        </div>
        <div className="flex flex-col gap-1 flex-1 p-4 border-x border-stroke-light">
          <span className="text-lg md:text-2xl font-bold text-text-heading">{pricePerHectare}</span>
          <span className="text-[13px] text-text-muted">Precio por hectárea</span>
        </div>
        <div className="flex flex-col gap-1 flex-1 p-4">
          <span className="text-lg md:text-2xl font-bold text-text-heading">{area}</span>
          <span className="text-[13px] text-text-muted">Extensión total</span>
        </div>
      </div>
    </div>
  );
}
