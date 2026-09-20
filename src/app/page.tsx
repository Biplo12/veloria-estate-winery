import { EstatePreview } from "./_components/estate-preview";
import { FamilyPreview } from "./_components/family-preview";
import { Hero } from "./_components/hero";
import { VisitPreview } from "./_components/visit-preview";
import { WinesPreview } from "./_components/wines-preview";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <WinesPreview />
      <EstatePreview />
      <FamilyPreview />
      <VisitPreview />
    </main>
  );
}
