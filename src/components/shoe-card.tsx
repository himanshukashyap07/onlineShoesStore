'use client';

import Image from 'next/image';
import type { Shoe } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';

interface ShoeCardProps {
  shoe: Shoe;
}

export function ShoeCard({ shoe }: ShoeCardProps) {
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart with the first available size as a default.
    if (shoe.sizes.length > 0) {
        addToCart(shoe, shoe.sizes[0]);
    }
  };

  return (
    <Link href={`/products/${shoe.id}`} className="block h-full w-full">
      <Card className="group flex h-full w-full transform flex-col overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={shoe.imageUrl}
              alt={shoe.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              data-ai-hint={shoe.imageHint}
            />
            {shoe.salePrice && (
              <Badge variant="destructive" className="absolute top-3 right-3 z-10">
                SALE
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">{shoe.name}</CardTitle>
            <Badge variant="secondary">{shoe.brand}</Badge>
          </div>
          <CardDescription className="mt-2 text-sm">
            {shoe.color} - {shoe.style.charAt(0).toUpperCase() + shoe.style.slice(1)}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          {shoe.salePrice ? (
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-bold text-destructive">${shoe.salePrice.toFixed(2)}</p>
              <p className="text-sm font-medium text-muted-foreground line-through">${shoe.price.toFixed(2)}</p>
            </div>
          ) : (
            <p className="text-lg font-bold text-primary">${shoe.price.toFixed(2)}</p>
          )}
          <Button variant="default" size="sm" className="group/button" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2" />
              Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
