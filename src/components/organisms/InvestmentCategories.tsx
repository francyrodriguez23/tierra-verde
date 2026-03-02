import { Wheat, Beef, TreePine, Sun } from "lucide-react";
import { SectionLabel } from "@/components/atoms";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    icon: Wheat,
    title: "Agrícola",
    description: "Cultivos de café, cacao, aguacate, frutales y más. Alta demanda de exportación.",
    count: 324,
  },
  {
    icon: Beef,
    title: "Ganadera",
    description: "Cría, levante y ceba de ganado. Pastos mejorados y fuentes de agua.",
    count: 198,
  },
  {
    icon: TreePine,
    title: "Forestal",
    description: "Plantaciones maderables, bonos de carbono y conservación ambiental.",
    count: 87,
  },
  {
    icon: Sun,
    title: "Recreo",
    description: "Fincas de descanso, ecoturismo y proyectos de bienestar rural.",
    count: 156,
  },
];

export default function InvestmentCategories() {
  return (
    <section id="inversiones" className="flex flex-col gap-8 md:gap-12 bg-primary-dark px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 w-full">
      <div className="flex flex-col items-center gap-3 w-full">
        <SectionLabel color="mint">Categorías de Inversión</SectionLabel>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center -tracking-wide">
          Encuentra la finca ideal según tu objetivo
        </h2>
        <p className="text-sm md:text-base text-white/65 text-center max-w-[600px] leading-relaxed">
          Cada tipo de finca tiene características, retornos y requisitos diferentes. Te ayudamos a elegir.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </section>
  );
}
