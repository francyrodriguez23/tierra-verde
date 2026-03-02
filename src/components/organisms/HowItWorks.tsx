import { SectionLabel } from "@/components/atoms";
import { StepCard, StatCounter } from "@/components/molecules";

const steps = [
  {
    number: 1,
    title: "Verificación de Títulos",
    description:
      "Revisión del Certificado de Tradición y Libertad con la Superintendencia de Notariado y Registro.",
  },
  {
    number: 2,
    title: "Confirmación de Linderos",
    description:
      "Levantamiento topográfico con GPS de precisión y cruce con catastro del IGAC.",
  },
  {
    number: 3,
    title: "Uso de Suelo",
    description:
      "Verificación del uso permitido según el POT municipal y aptitud del terreno.",
  },
  {
    number: 4,
    title: "Publicación Segura",
    description:
      "Solo se publica si cumple todos los criterios. Fotos de drone y documentación completa.",
  },
];

const stats = [
  { value: "2.400+", label: "Fincas verificadas" },
  { value: "18", label: "Departamentos" },
  { value: "$850M+", label: "En transacciones" },
  { value: "99.2%", label: "Satisfacción" },
];

export default function HowItWorks() {
  return (
    <section
      id="verificaciones"
      className="flex flex-col items-center gap-10 md:gap-14 bg-white px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 w-full"
    >
      <div className="flex flex-col items-center gap-3">
        <SectionLabel>Proceso de Verificación</SectionLabel>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-heading text-center -tracking-wide">
          Compra con total tranquilidad
        </h2>
        <p className="text-sm md:text-base text-text-muted text-center max-w-lg">
          Cada propiedad pasa por un riguroso proceso de verificación antes de publicarse
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {steps.map((step) => (
          <StepCard key={step.number} {...step} />
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 w-full bg-bg-gray-light rounded-xl border border-stroke-light">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
