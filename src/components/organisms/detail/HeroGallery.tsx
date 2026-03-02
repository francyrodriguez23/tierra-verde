import Image from "next/image";
import { Plane, Camera, RotateCcw } from "lucide-react";

interface HeroGalleryProps {
  images: string[];
}

export default function HeroGallery({ images }: HeroGalleryProps) {
  const [main, thumb1, thumb2] = images;

  return (
    <>
      {/* Mobile gallery */}
      <div className="relative lg:hidden w-full h-[260px]">
        <Image src={main} alt="Finca" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 bg-primary-dark/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px]">
            Verificada
          </span>
        </div>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-black/65 text-white text-xs font-medium px-2.5 py-1.5 rounded-md">
          <Camera size={14} />
          1/12
        </span>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-black/65 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md">
          <RotateCcw size={14} />
          360°
        </span>
      </div>

      {/* Desktop gallery */}
      <div className="hidden lg:flex gap-1 px-20 h-[480px] w-full">
        <div className="relative flex-1 rounded-l-xl overflow-hidden">
          <Image src={main} alt="Finca principal" fill className="object-cover" sizes="60vw" priority />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-black/65 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg">
            <Plane size={12} />
            Drone
          </span>
        </div>
        <div className="flex flex-col gap-1 w-[300px]">
          <div className="relative flex-1 rounded-tr-xl overflow-hidden">
            <Image src={thumb1 || main} alt="Vista 2" fill className="object-cover" sizes="300px" />
          </div>
          <div className="relative flex-1 rounded-br-xl overflow-hidden">
            <Image src={thumb2 || main} alt="Vista 360" fill className="object-cover" sizes="300px" />
          </div>
        </div>
      </div>
    </>
  );
}
