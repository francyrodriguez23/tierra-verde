import {
  DetailNav,
  HeroGallery,
  PropertySummary,
  TechnicalAttributes,
  LegalVerification,
  Profitability,
  DocumentsSection,
  Sidebar,
  MobileBottomBar,
} from "@/components/organisms/detail";

interface PropertyData {
  title: string;
  location: string;
  price: string;
  pricePerHectare: string;
  area: string;
  images: string[];
}

export default function PropertyDetailTemplate({ property }: { property: PropertyData }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <DetailNav title={property.title} />
      <HeroGallery images={property.images} />

      {/* Body: main content + sidebar */}
      <div className="flex gap-8 px-4 md:px-10 lg:px-20 py-6 md:py-8 w-full">
        {/* Main content */}
        <div className="flex flex-col gap-10 md:gap-12 flex-1 min-w-0">
          <PropertySummary
            title={property.title}
            location={property.location}
            price={property.price}
            pricePerHectare={property.pricePerHectare}
            area={property.area}
          />

          {/* Map placeholder */}
          <div className="w-full h-[200px] lg:h-[320px] bg-bg-gray-light rounded-xl border border-stroke-light flex items-center justify-center">
            <span className="text-sm text-text-muted">Mapa de la propiedad</span>
          </div>

          <div className="h-px bg-stroke-light" />
          <TechnicalAttributes />
          <div className="h-px bg-stroke-light" />
          <LegalVerification />
          <div className="h-px bg-stroke-light" />
          <Profitability />
          <div className="h-px bg-stroke-light" />
          <DocumentsSection />
        </div>

        {/* Sidebar */}
        <Sidebar
          price={property.price}
          pricePerHectare={property.pricePerHectare}
          area={property.area}
        />
      </div>

      {/* Mobile CTAs */}
      <div className="lg:hidden flex gap-2.5 px-4 pb-4">
        <button className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-[10px] flex-1 cursor-pointer">
          Contactar
        </button>
        <button className="inline-flex items-center justify-center gap-2 bg-white text-primary-dark font-semibold px-7 py-3.5 rounded-[10px] border border-stroke-light flex-1 cursor-pointer">
          Agendar Visita
        </button>
      </div>

      {/* Mobile financing */}
      <div className="lg:hidden flex flex-col gap-3 mx-4 mb-4 bg-bg-neutral rounded-xl p-5">
        <span className="text-[13px] font-semibold text-text-heading">Calculadora de financiamiento</span>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Cuota inicial (30%)</span>
          <span className="text-xs font-semibold text-text-heading">$666M</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Financiado (70%)</span>
          <span className="text-xs font-semibold text-text-heading">$1.554M</span>
        </div>
        <div className="h-px bg-stroke-light" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Cuota mensual (15 años)</span>
          <span className="text-[13px] font-bold text-primary-green">$16.8M</span>
        </div>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="lg:hidden h-20" />

      <MobileBottomBar
        price="$2.220M"
        pricePerHectare="$74M"
        area="30 ha"
      />
    </div>
  );
}
