import { Logo } from "@/components/atoms";
import { FooterColumn } from "@/components/molecules";

const columns = [
  {
    title: "Plataforma",
    links: [
      { label: "Buscar Fincas", href: "/propiedades" },
      { label: "Mapa Interactivo", href: "/propiedades" },
      { label: "Publicar Propiedad", href: "/#" },
      { label: "Verificaciones", href: "/#verificaciones" },
    ],
  },
  {
    title: "Inversiones",
    links: [
      { label: "Agrícola", href: "/propiedades" },
      { label: "Ganadera", href: "/propiedades" },
      { label: "Forestal", href: "/propiedades" },
      { label: "Recreo", href: "/propiedades" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Nosotros", href: "/#nosotros" },
      { label: "Equipo", href: "/#" },
      { label: "Blog", href: "/#" },
      { label: "Contacto", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de Uso", href: "/#" },
      { label: "Política de Privacidad", href: "/#" },
      { label: "Habeas Data", href: "/#" },
      { label: "PQRS", href: "/#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 md:gap-12 bg-bg-footer px-5 md:px-10 lg:px-20 pt-12 md:pt-16 pb-8 w-full">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full">
        {/* Brand */}
        <div className="flex flex-col gap-4 lg:w-80 shrink-0">
          <Logo color="light" size="sm" />
          <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
            La plataforma líder en compraventa de fincas rurales verificadas en Colombia.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          {columns.map((col) => (
            <FooterColumn key={col.title} {...col} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 w-full" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
        <span className="text-[13px] text-white/30 text-center sm:text-left">
          © 2026 TierraVerde S.A.S. Todos los derechos reservados. NIT: 901.XXX.XXX-X
        </span>
        <span className="text-xs text-white/25">
          Vigilado por la Superintendencia de Industria y Comercio
        </span>
      </div>
    </footer>
  );
}
