import { Button } from "@/components/ui/button";
import ThreeShoe from "./three-shoe";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background to-primary/5">
       <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2 md:py-32 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary md:text-6xl lg:text-7xl">
            Step Into the Future
          </h1>
          <p className="max-w-md text-lg text-foreground/70 md:text-xl">
            Experience the perfect blend of style, comfort, and innovation. Our
            latest collection is designed to move with you.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Shop Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative h-96 w-full">
            <ThreeShoe />
        </div>
      </div>
    </section>
  );
}
