import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/atoms";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: "finca-ganadera-el-porvenir",
    title: "Finca Ganadera El Porvenir",
    location: "Montería, Córdoba",
    hectares: "120",
    price: "$18.5M / hectárea",
    imageUrl: "https://images.unsplash.com/photo-1682832920230-467794b3c128?w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
  {
    id: "finca-cafetera-la-esperanza",
    title: "Finca Cafetera La Esperanza",
    location: "Salento, Quindío",
    hectares: "45",
    price: "$32M / hectárea",
    imageUrl: "https://images.unsplash.com/photo-1672015151052-d6fa87fc8aba?w=800&q=80",
    badges: ["CTL", "Linderos"],
  },
  {
    id: "finca-forestal-los-cedros",
    title: "Finca Forestal Los Cedros",
    location: "Popayán, Cauca",
    hectares: "200",
    price: "$12M / hectárea",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
];

export default function FeaturedProperties() {
  return (
    <section id="propiedades" className="flex flex-col gap-8 md:gap-12 bg-bg-main px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 w-full">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 w-full">
        <div className="flex flex-col gap-2">
          <SectionLabel>Propiedades Destacadas</SectionLabel>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-heading -tracking-wide">
            Fincas verificadas listas para invertir
          </h2>
        </div>

        <Link href="/propiedades" className="inline-flex items-center gap-1.5 border border-stroke-medium rounded-lg px-5 py-2.5 text-sm font-medium text-primary-dark hover:bg-bg-gray-light transition-colors cursor-pointer self-start sm:self-auto shrink-0">
          Ver todas las propiedades
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {properties.map((prop) => (
          <PropertyCard key={prop.title} {...prop} />
        ))}
      </div>
    </section>
  );
}
