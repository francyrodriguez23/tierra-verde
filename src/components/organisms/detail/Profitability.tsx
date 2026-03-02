import { TrendingUp, Sun, Thermometer, CloudDrizzle } from "lucide-react";

const kpis = [
  { value: "42%", label: "Margen bruto" },
  { value: "8.7%", label: "ROI anual estimado" },
  { value: "11.5 años", label: "Período de recuperación" },
];

const scenarios = [
  {
    icon: Sun,
    label: "Normal",
    value: "+$193M/año",
    bg: "bg-bg-light-green",
    iconColor: "text-primary-green",
    labelColor: "text-text-heading",
    valueColor: "text-primary-green",
  },
  {
    icon: Thermometer,
    label: "El Niño",
    value: "+$112M/año",
    bg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    labelColor: "text-[#92400E]",
    valueColor: "text-[#D97706]",
  },
  {
    icon: CloudDrizzle,
    label: "La Niña",
    value: "+$87M/año",
    bg: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
    labelColor: "text-[#1E40AF]",
    valueColor: "text-[#2563EB]",
  },
];

export default function Profitability() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <TrendingUp size={20} className="text-primary-green" />
        <h2 className="text-[22px] font-semibold text-text-heading">Rentabilidad y Proyecciones</h2>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col gap-1 bg-bg-light-green rounded-[10px] p-4">
            <span className="text-xl md:text-[28px] font-bold text-primary-green">{kpi.value}</span>
            <span className="text-[13px] text-text-body">{kpi.label}</span>
          </div>
        ))}
      </div>

      {/* Production Chart placeholder */}
      <div className="flex flex-col gap-4 border border-stroke-light rounded-xl p-5 md:p-6">
        <h3 className="text-[15px] font-semibold text-text-heading">Producción Histórica (ton/año)</h3>
        <div className="w-full h-[200px] bg-bg-gray-light rounded-lg flex items-center justify-center">
          <span className="text-sm text-text-muted">Gráfico de producción</span>
        </div>
        <div className="flex items-center justify-center gap-5">
          {[
            { color: "bg-primary-green", label: "Café (ton)" },
            { color: "bg-primary-mint", label: "Aguacate (ton)" },
            { color: "bg-[#86EFAC]", label: "Plátano (ton)" },
          ].map((leg) => (
            <div key={leg.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${leg.color}`} />
              <span className="text-xs text-text-muted">{leg.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenarios & Cash Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Cash Flow */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-xl p-5">
          <h3 className="text-[15px] font-semibold text-text-heading">Flujo de Caja Proyectado</h3>
          <div className="w-full h-[160px] bg-bg-gray-light rounded-lg flex items-center justify-center">
            <span className="text-sm text-text-muted">Gráfico flujo de caja</span>
          </div>
          <p className="text-xs text-text-muted">Proyección a 10 años con tasa de descuento del 12%</p>
        </div>

        {/* Climate Scenarios */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-xl p-5">
          <h3 className="text-[15px] font-semibold text-text-heading">Escenarios Climáticos</h3>
          {scenarios.map((s) => (
            <div
              key={s.label}
              className={`flex items-center justify-between ${s.bg} rounded-lg px-4 py-3`}
            >
              <div className="flex items-center gap-2">
                <s.icon size={16} className={s.iconColor} />
                <span className={`text-sm font-medium ${s.labelColor}`}>{s.label}</span>
              </div>
              <span className={`text-sm font-bold ${s.valueColor}`}>{s.value}</span>
            </div>
          ))}
          <p className="text-xs text-text-muted pt-3">
            Basado en datos históricos IDEAM 2015-2025
          </p>
        </div>
      </div>
    </section>
  );
}
