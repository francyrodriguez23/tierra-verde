import { ShieldCheck, CircleCheck, AlertTriangle, Timer } from "lucide-react";

export default function LegalVerification() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-2.5">
        <ShieldCheck size={20} className="text-primary-green" />
        <h2 className="text-[22px] font-semibold text-text-heading">Verificación Legal</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* CTL Card */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-[10px] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted">Estado CTL</span>
            <span className="inline-flex items-center gap-1 bg-bg-light-green text-primary-green-dark text-[11px] font-semibold px-2.5 py-1 rounded-full">
              <CircleCheck size={12} />
              Limpio
            </span>
          </div>
          <p className="text-sm text-text-body">Última consulta: 15 enero 2026</p>
          <p className="text-[13px] text-text-muted">Folio: 020-45678-00-0000</p>
        </div>

        {/* Titularidad */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-[10px] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted">Titularidad Actual</span>
            <span className="inline-flex items-center gap-1 bg-bg-light-green text-primary-green-dark text-[11px] font-semibold px-2.5 py-1 rounded-full">
              <CircleCheck size={12} />
              Confirmado
            </span>
          </div>
          <p className="text-[15px] font-semibold text-text-heading">María Luisa Gómez Ríos</p>
          <p className="text-[13px] text-text-muted">CC: ****5678 · Desde 2018</p>
        </div>

        {/* Gravámenes */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-[10px] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-text-muted">Gravámenes Activos</span>
            <span className="inline-flex items-center gap-1 bg-[#FEF3C7] text-[#92400E] text-[11px] font-semibold px-2.5 py-1 rounded-full">
              <AlertTriangle size={12} />
              1 activo
            </span>
          </div>
          <p className="text-sm text-text-body">Hipoteca Banco Agrario — $380M</p>
          <p className="text-[13px] text-text-muted">Constituida: marzo 2022 · Vence: 2032</p>
        </div>

        {/* Historial */}
        <div className="flex flex-col gap-3 border border-stroke-light rounded-[10px] p-5">
          <div className="flex items-center gap-2">
            <Timer size={16} className="text-text-muted" />
            <span className="text-[13px] text-text-muted">Historial de Propietarios</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-text-heading">María Luisa Gómez Ríos</span>
            <span className="text-[13px] text-text-muted">2018 — Actual</span>
          </div>
          <div className="h-px bg-stroke-light" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-body">José Hernando Ríos</span>
            <span className="text-[13px] text-text-muted">2005 — 2018</span>
          </div>
          <div className="h-px bg-stroke-light" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-body">Herederos Ríos Mejía</span>
            <span className="text-[13px] text-text-muted">1987 — 2005</span>
          </div>
        </div>
      </div>
    </section>
  );
}
