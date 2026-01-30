import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PressPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Press</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              SoleSculpt in the news.
            </p>
          </div>
          <div className="space-y-8">
            <blockquote className="rounded-lg border bg-card p-6">
              <p className="text-lg text-foreground/80 italic">"The most comfortable and stylish shoes I've ever worn. SoleSculpt is a game-changer."</p>
              <footer className="mt-4 text-sm font-semibold text-primary">- Vogue Fashion</footer>
            </blockquote>
            <blockquote className="rounded-lg border bg-card p-6">
              <p className="text-lg text-foreground/80 italic">"A perfect blend of innovation and craftsmanship. SoleSculpt is setting a new standard for footwear."</p>
              <footer className="mt-4 text-sm font-semibold text-primary">- GQ Magazine</footer>
            </blockquote>
            <blockquote className="rounded-lg border bg-card p-6">
              <p className="text-lg text-foreground/80 italic">"With their commitment to sustainability and ethical production, SoleSculpt is a brand you can feel good about supporting."</p>
              <footer className="mt-4 text-sm font-semibold text-primary">- Eco-Threads Weekly</footer>
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
