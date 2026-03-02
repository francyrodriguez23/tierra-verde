import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/atoms";
import { SearchBar } from "@/components/molecules";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[580px] lg:h-[640px] bg-primary-dark overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/80 to-primary-dark/95" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 gap-6 md:gap-8">
        <Badge variant="hero-pill" icon={<ShieldCheck size={14} className="text-primary-mint" />}>
          <span className="hidden sm:inline">Todas las propiedades verificadas con CTL y linderos confirmados</span>
          <span className="sm:hidden">Propiedades verificadas</span>
        </Badge>

        <h1 className="text-3xl md:text-[42px] lg:text-[52px] font-bold text-white text-center -tracking-wide max-w-[900px] leading-tight">
          Tu finca en Colombia, verificada y segura
        </h1>

        <p className="text-base md:text-lg text-white/70 text-center max-w-[700px] leading-relaxed">
          La plataforma líder en compraventa de fincas rurales con verificación integral de títulos,
          linderos y uso de suelo. Desde 1 hectárea hasta grandes extensiones.
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
