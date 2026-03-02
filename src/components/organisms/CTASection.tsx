import Link from "next/link";
import { Plus, UserPlus } from "lucide-react";
import { Badge, Button } from "@/components/atoms";

export default function CTASection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-bg-neutral px-5 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20 w-full">
      {/* For Sellers */}
      <div className="flex flex-col items-start gap-6 bg-primary-dark rounded-2xl p-8 md:p-12">
        <Badge variant="section-label-dark">Para Propietarios</Badge>

        <h2 className="text-2xl md:text-[28px] font-bold text-white -tracking-wide leading-tight">
          Publica tu finca y llega a miles de compradores
        </h2>

        <p className="text-[15px] text-white/70 leading-relaxed">
          Verificamos tu propiedad, tomamos fotos con drone y la publicamos en nuestra plataforma.
          Sin costo hasta la venta.
        </p>

        <Link href="/#">
          <Button variant="primary-white" icon={<Plus size={18} />}>
            Publicar mi Finca
          </Button>
        </Link>
      </div>

      {/* For Buyers */}
      <div className="flex flex-col items-start gap-6 bg-white rounded-2xl p-8 md:p-12 border border-stroke-light">
        <Badge variant="section-label">Para Compradores</Badge>

        <h2 className="text-2xl md:text-[28px] font-bold text-text-heading -tracking-wide leading-tight">
          Regístrate y recibe alertas de nuevas fincas
        </h2>

        <p className="text-[15px] text-text-muted leading-relaxed">
          Crea tu perfil de inversionista, define tus criterios y te notificamos cuando publiquemos
          fincas que encajan.
        </p>

        <Link href="/#">
          <Button variant="primary" icon={<UserPlus size={18} />}>
            Crear Cuenta Gratis
          </Button>
        </Link>
      </div>
    </section>
  );
}
