"use client";

import { useRouter } from "next/navigation";
import { Search, MapPin, Trees, DollarSign, Ruler } from "lucide-react";

const filters = [
  { icon: Trees, label: "Tipo de Finca" },
  { icon: DollarSign, label: "Precio" },
  { icon: Ruler, label: "Hectáreas" },
  { icon: MapPin, label: "Departamento" },
];

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full max-w-[1000px]">
      <div className="flex items-center gap-3 px-4 md:px-5 pt-4 pb-2">
        <Search size={20} className="text-primary-dark shrink-0" />
        <input
          type="text"
          placeholder="Busca por municipio, vereda o departamento..."
          className="flex-1 min-w-0 text-sm md:text-[15px] outline-none placeholder:text-text-placeholder bg-transparent"
        />
        <button
          onClick={() => router.push("/propiedades")}
          className="inline-flex items-center gap-2 bg-primary-dark text-white font-semibold text-sm px-4 md:px-7 py-3 md:py-3.5 rounded-[10px] hover:bg-primary-dark/90 transition-colors cursor-pointer shrink-0"
        >
          <MapPin size={16} />
          <span className="hidden sm:inline">Buscar</span>
        </button>
      </div>

      <div className="flex items-center justify-start md:justify-center gap-2 px-4 md:px-5 pb-4 pt-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f.label}
            className="inline-flex items-center gap-1.5 border border-stroke-medium rounded-lg px-3 md:px-3.5 py-2 text-[13px] font-medium text-text-body hover:bg-bg-gray-light transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <f.icon size={14} className="text-primary-dark" />
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
