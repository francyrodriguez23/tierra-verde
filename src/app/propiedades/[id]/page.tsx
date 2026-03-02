import PropertyDetailTemplate from "@/components/templates/PropertyDetailTemplate";

const mockProperty = {
  title: "Finca El Porvenir",
  location: "Vereda La Esperanza, Rionegro, Antioquia",
  price: "$2.220.000.000",
  pricePerHectare: "$74.000.000/ha",
  area: "30 ha",
  images: [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    "https://images.unsplash.com/photo-1682832920230-467794b3c128?w=800&q=80",
    "https://images.unsplash.com/photo-1672015151052-d6fa87fc8aba?w=800&q=80",
  ],
};

export default function PropertyDetailPage() {
  return <PropertyDetailTemplate property={mockProperty} />;
}
