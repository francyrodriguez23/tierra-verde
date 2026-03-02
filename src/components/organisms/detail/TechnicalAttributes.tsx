import {
  ClipboardList, Mountain, CloudRain, Layers, Droplets,
  Route, MapPin, Zap, Wifi, type LucideIcon,
} from "lucide-react";

interface Attribute {
  icon: LucideIcon;
  value: string;
  label: string;
}

const attributes: Attribute[] = [
  { icon: Mountain, value: "2.150 msnm", label: "Altitud" },
  { icon: CloudRain, value: "1.800 mm/año", label: "Precipitación anual" },
  { icon: Layers, value: "Franco-arcilloso", label: "Tipo de suelo" },
  { icon: Droplets, value: "Río + 2 nacimientos", label: "Fuentes de agua" },
  { icon: Route, value: "Vía pavimentada + 2 km destapada", label: "Vías de acceso" },
  { icon: MapPin, value: "12 km a Rionegro", label: "Distancia a cabecera" },
  { icon: Zap, value: "Sí — Red trifásica", label: "Cobertura eléctrica" },
  { icon: Wifi, value: "4G LTE — Fibra en proyecto", label: "Cobertura internet" },
];

function AttrCard({ icon: Icon, value, label }: Attribute) {
  return (
    <div className="flex items-center gap-3 bg-bg-light-green rounded-[10px] p-4">
      <Icon size={20} className="text-primary-green shrink-0" />
      <div className="flex flex-col gap-0.5">
        <span className="text-[15px] font-semibold text-text-heading">{value}</span>
        <span className="text-xs text-text-muted">{label}</span>
      </div>
    </div>
  );
}

export default function TechnicalAttributes() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <ClipboardList size={20} className="text-primary-green" />
        <h2 className="text-[22px] font-semibold text-text-heading">Atributos Técnicos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {attributes.map((attr) => (
          <AttrCard key={attr.label} {...attr} />
        ))}
      </div>
    </section>
  );
}
