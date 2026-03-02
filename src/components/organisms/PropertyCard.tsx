import { MapPin, Maximize, ShieldCheck, CircleCheck, FileCheck, Trees, Fence, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  hectares: string;
  price: string;
  imageUrl: string;
  badges: string[];
  verified?: boolean;
  productType?: string;
}

const productIcons: Record<string, typeof Trees> = {
  "Café arábica": Trees,
  "Café especial": Trees,
  "Aguacate Hass": Trees,
  "Cítricos": Leaf,
  "Cacao fino": Leaf,
  "350 cabezas": Fence,
};

export default function PropertyCard({
  id,
  title,
  location,
  hectares,
  price,
  imageUrl,
  badges,
  verified = true,
  productType,
}: PropertyCardProps) {
  const badgeIcons: Record<string, typeof CircleCheck> = {
    Linderos: CircleCheck,
    "Uso de Suelo": FileCheck,
    CTL: ShieldCheck,
  };

  const ProductIcon = productType ? (productIcons[productType] || Leaf) : null;

  return (
    <Link href={`/propiedades/${id}`} className="flex flex-col bg-white rounded-xl border border-stroke-light overflow-hidden flex-1 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative h-[220px] w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />

        {verified && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-primary-dark/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
            <ShieldCheck size={12} className="text-primary-mint" />
            CTL Verificado
          </span>
        )}

        <span className="absolute bottom-3 left-3 bg-white/90 text-primary-dark text-[13px] font-bold px-3 py-1.5 rounded-[6px]">
          {price}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-[17px] font-semibold text-text-heading">{title}</h3>

        <div className="flex items-center gap-1">
          <MapPin size={14} className="text-text-muted" />
          <span className="text-[13px] text-text-muted">{location}</span>
        </div>

        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center gap-1">
            <Maximize size={14} className="text-primary-dark" />
            <span className="text-[13px] font-semibold text-text-body">{hectares} ha</span>
          </div>
          {productType && ProductIcon && (
            <div className="flex items-center gap-1">
              <ProductIcon size={14} className="text-primary-dark" />
              <span className="text-[13px] font-semibold text-text-body">{productType}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {badges.map((badge) => {
            const Icon = badgeIcons[badge] || CircleCheck;
            return (
              <span
                key={badge}
                className="inline-flex items-center gap-1 bg-bg-light-green text-primary-green-dark text-[11px] font-medium px-2 py-1 rounded-[4px]"
              >
                <Icon size={12} className="text-primary-green" />
                {badge}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
