"use client";

import { useState } from "react";
import {
  Trees,
  MapPin,
  Ruler,
  Banknote,
  ShieldCheck,
  ChevronDown,
  LayoutGrid,
  List,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header, PropertyCard, Footer } from "@/components/organisms";

const filters = [
  { label: "Tipo de Finca", icon: Trees },
  { label: "Ubicación", icon: MapPin },
  { label: "Tamaño", icon: Ruler },
  { label: "Precio", icon: Banknote },
  { label: "Verificadas", icon: ShieldCheck },
];

const properties = [
  {
    id: "finca-cafetera-el-porvenir",
    title: "Finca Cafetera El Porvenir",
    location: "Montería, Córdoba",
    hectares: "120",
    price: "$2.220M",
    productType: "Café arábica",
    imageUrl:
      "https://images.unsplash.com/photo-1764121454907-159d6323bb4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
  {
    id: "hacienda-la-esperanza",
    title: "Hacienda La Esperanza",
    location: "Armenia, Quindío",
    hectares: "45",
    price: "$3.150M",
    productType: "Aguacate Hass",
    imageUrl:
      "https://images.unsplash.com/photo-1760445530338-d5cb6c5b2e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["CTL", "Linderos"],
  },
  {
    id: "finca-los-naranjos",
    title: "Finca Los Naranjos",
    location: "Rionegro, Santander",
    hectares: "80",
    price: "$1.440M",
    productType: "Cítricos",
    imageUrl:
      "https://images.unsplash.com/photo-1558444510-2bacddde13bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
  {
    id: "parcela-cafetal-alto",
    title: "Parcela Cafetal Alto",
    location: "Manizales, Caldas",
    hectares: "12",
    price: "$890M",
    productType: "Café especial",
    imageUrl:
      "https://images.unsplash.com/photo-1526462641272-17c0ad412984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
  {
    id: "finca-ganadera-san-jose",
    title: "Finca Ganadera San José",
    location: "Sincelejo, Sucre",
    hectares: "200",
    price: "$4.800M",
    productType: "350 cabezas",
    imageUrl:
      "https://images.unsplash.com/photo-1595709915817-38e68573934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["CTL", "Linderos"],
  },
  {
    id: "hacienda-rio-claro",
    title: "Hacienda Río Claro",
    location: "Puerto Triunfo, Antioquia",
    hectares: "150",
    price: "$5.200M",
    productType: "Cacao fino",
    imageUrl:
      "https://images.unsplash.com/photo-1631692448368-c0ddb09a7649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    badges: ["Linderos", "Uso de Suelo"],
  },
];

const activeChips = ["Café", "Hass"];

export default function PropertiesListingTemplate() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <section className="flex flex-col gap-8 bg-white border-b border-stroke-light px-5 md:px-10 lg:px-20 py-10 lg:py-12">
          <div className="flex flex-col gap-3 max-w-[600px]">
            <span className="text-xs font-semibold tracking-[2px] text-primary-dark uppercase">
              Explorar Propiedades
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-text-heading -tracking-wide">
              Todas las fincas verificadas
            </h1>
            <p className="text-base text-text-muted leading-relaxed">
              Encuentra la finca ideal para tu inversión. Filtra por tipo,
              ubicación, tamaño y más.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className="inline-flex items-center gap-1.5 bg-white border border-stroke-medium rounded-lg px-3.5 py-2 text-[13px] font-medium text-text-body hover:bg-bg-gray-light transition-colors cursor-pointer"
              >
                <filter.icon size={14} className="text-primary-dark" />
                {filter.label}
                <ChevronDown size={14} className="text-text-placeholder" />
              </button>
            ))}
          </div>
        </section>

        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border-b border-stroke-light px-5 md:px-10 lg:px-20 py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[15px] font-semibold text-text-heading">
              142 propiedades encontradas
            </span>
            {activeChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1 bg-bg-light-green text-primary-green-dark text-xs font-medium pl-2.5 pr-1.5 py-1 rounded-full"
              >
                {chip}
                <button className="p-0.5 hover:bg-primary-green/10 rounded-full cursor-pointer">
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <button className="inline-flex items-center gap-1.5 border border-stroke-medium rounded-lg px-3.5 py-2 text-[13px] font-medium text-text-body hover:bg-bg-gray-light transition-colors cursor-pointer">
              Precio: menor a mayor
              <ChevronDown size={14} className="text-text-placeholder" />
            </button>

            {/* View Toggle */}
            <div className="flex border border-stroke-light rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 cursor-pointer transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary-dark text-white"
                    : "bg-white text-text-muted hover:bg-bg-gray-light"
                }`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 cursor-pointer transition-colors ${
                  viewMode === "list"
                    ? "bg-primary-dark text-white"
                    : "bg-white text-text-muted hover:bg-bg-gray-light"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <section className="px-5 md:px-10 lg:px-20 py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center px-5 md:px-10 lg:px-20 pb-12 pt-2">
          <nav className="flex items-center gap-1">
            <button className="flex items-center justify-center border border-stroke-light rounded-lg px-3 py-2 text-text-muted hover:bg-bg-gray-light transition-colors cursor-pointer">
              <ChevronLeft size={16} />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center min-w-[36px] rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                  currentPage === page
                    ? "bg-primary-dark text-white"
                    : "text-text-muted hover:bg-bg-gray-light"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-[13px] font-medium text-text-muted px-1">
              ...
            </span>

            <button
              onClick={() => setCurrentPage(24)}
              className={`flex items-center justify-center min-w-[36px] rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                currentPage === 24
                  ? "bg-primary-dark text-white"
                  : "text-text-muted hover:bg-bg-gray-light"
              }`}
            >
              24
            </button>

            <button className="flex items-center justify-center border border-stroke-light rounded-lg px-3 py-2 text-text-muted hover:bg-bg-gray-light transition-colors cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
