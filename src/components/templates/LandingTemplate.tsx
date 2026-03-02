import {
  Header,
  Hero,
  FeaturedProperties,
  InvestmentCategories,
  HowItWorks,
  CTASection,
  Footer,
} from "@/components/organisms";

export default function LandingTemplate() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex flex-col flex-1">
        <Hero />
        <FeaturedProperties />
        <InvestmentCategories />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
