'use client';

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Shoe } from '@/lib/types';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { notFound } from 'next/navigation';
import { useCartStore } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";

export default function ProductPage({ params }: { params: { id: string } }) {
  const shoe: Shoe | undefined = PlaceHolderImages.find(s => s.id === params.id);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const { addToCart } = useCartStore();
  const { toast } = useToast();

  if (!shoe) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    addToCart(shoe, selectedSize);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[400px] md:h-[550px] rounded-lg overflow-hidden group">
               <Image
                src={shoe.imageUrl}
                alt={shoe.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={shoe.imageHint}
              />
               {shoe.salePrice && (
                <Badge variant="destructive" className="absolute top-4 left-4 z-10">
                  SALE
                </Badge>
              )}
            </div>
            <div className="flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit">{shoe.brand}</Badge>
                <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl mt-2">{shoe.name}</h1>
                <p className="text-lg text-muted-foreground mt-2">{shoe.color} - {shoe.style.charAt(0).toUpperCase() + shoe.style.slice(1)}</p>

                <div className="mt-6">
                    {shoe.salePrice ? (
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-destructive">${shoe.salePrice.toFixed(2)}</p>
                        <p className="text-xl font-medium text-muted-foreground line-through">${shoe.price.toFixed(2)}</p>
                      </div>
                    ) : (
                      <p className="text-3xl font-bold text-primary">${shoe.price.toFixed(2)}</p>
                    )}
                </div>

                <div className="mt-8">
                    <h3 className="font-semibold mb-3 text-foreground/80">Select Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {shoe.sizes.map(size => (
                            <Button 
                                key={size} 
                                variant={selectedSize === size ? "default" : "outline"} 
                                className="w-16 h-12 text-base"
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </Button>
                        ))}
                    </div>
                </div>

                <Button size="lg" className="mt-8 w-full group" onClick={handleAddToCart}>
                    Add to Cart <ShoppingBag className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
