"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Menu, X } from "lucide-react";
import { Logo, NavLink } from "@/components/atoms";

const navItems = [
  { href: "#propiedades", label: "Propiedades" },
  { href: "#inversiones", label: "Inversiones" },
  { href: "#verificaciones", label: "Verificaciones" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-white w-full">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/#" className="text-sm font-semibold text-primary-dark hover:text-primary-dark/80 transition-colors">
            Iniciar Sesión
          </Link>
          <Link href="/#" className="inline-flex items-center gap-2 bg-primary-dark text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark/90 transition-colors">
            <Plus size={16} />
            Publicar Finca
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-primary-dark cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-stroke-light z-50 shadow-lg">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-5 pb-5 border-t border-stroke-light pt-4">
            <Link href="/#" className="text-sm font-semibold text-primary-dark py-3 text-center">
              Iniciar Sesión
            </Link>
            <Link href="/#" className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white text-sm font-semibold px-6 py-3 rounded-lg w-full">
              <Plus size={16} />
              Publicar Finca
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

