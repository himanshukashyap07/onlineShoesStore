import AiAdvisor from "@/components/ai-advisor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import ShoeShowcase from "@/components/shoe-showcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ShoeShowcase />
        <AiAdvisor />
      </main>
      <Footer />
    </div>
  );
}
