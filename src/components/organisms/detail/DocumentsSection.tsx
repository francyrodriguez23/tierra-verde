import {
  FileText, Map, FlaskConical, Shield, Users, Download,
  type LucideIcon,
} from "lucide-react";

interface Doc {
  icon: LucideIcon;
  name: string;
  size: string;
}

const documents: Doc[] = [
  { icon: Map, name: "Planos del predio", size: "PDF · 4.2 MB" },
  { icon: FlaskConical, name: "Análisis de suelo", size: "PDF · 2.8 MB" },
  { icon: Shield, name: "Certificado CTL", size: "PDF · 1.5 MB" },
  { icon: Users, name: "Actas de colindancia", size: "PDF · 3.1 MB" },
];

export default function DocumentsSection() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <FileText size={20} className="text-primary-green" />
        <h2 className="text-[22px] font-semibold text-text-heading">Documentos Disponibles</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {documents.map((doc) => (
          <div
            key={doc.name}
            className="flex flex-col items-center gap-3 border border-stroke-light rounded-[10px] p-5"
          >
            <div className="w-12 h-12 rounded-xl bg-bg-light-green flex items-center justify-center">
              <doc.icon size={24} className="text-primary-green" />
            </div>
            <span className="text-sm font-semibold text-text-heading text-center">{doc.name}</span>
            <span className="text-xs text-text-muted">{doc.size}</span>
            <button className="inline-flex items-center gap-1.5 border border-stroke-medium rounded-lg px-5 py-2.5 text-sm font-medium text-primary-dark hover:bg-bg-gray-light transition-colors cursor-pointer w-full justify-center">
              Descargar
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
