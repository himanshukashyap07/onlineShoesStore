import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Our Story</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              The journey behind SoleSculpt's innovative footwear.
            </p>
          </div>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Founded in 2024, SoleSculpt was born from a passion for innovative design and a desire to redefine the footwear industry. We believe that shoes should be more than just a functional necessity; they should be a seamless extension of your personal style and a testament to quality craftsmanship.
            </p>
            <p>
              Our journey began with a small team of designers, engineers, and dreamers who shared a common vision: to create shoes that perfectly balance aesthetics, comfort, and sustainability. We spent countless hours researching materials, refining our manufacturing processes, and pushing the boundaries of what's possible in footwear.
            </p>
            <p>
              Today, SoleSculpt is proud to offer a collection that embodies our core values. Each pair of shoes is a work of art, meticulously crafted to provide unparalleled comfort and timeless style. We are committed to using eco-friendly materials and ethical production methods, ensuring that our footprint on the planet is as light as the feeling of our shoes on your feet.
            </p>
            <p>
              Thank you for being a part of our story. We're excited to see where the path takes us next.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
