"use client";

import { useState, useMemo } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ShoeCard } from "@/components/shoe-card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Shoe } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const allShoes: Shoe[] = PlaceHolderImages.filter(s => s.category.includes('men'));

const styles = ['all', ...Array.from(new Set(allShoes.map(s => s.style)))];
const brands = ['all', ...Array.from(new Set(allShoes.map(s => s.brand)))];

export default function MenPage() {
  const [filters, setFilters] = useState({
    style: 'all',
    brand: 'all',
  });

  const filteredShoes = useMemo(() => {
    return allShoes.filter(shoe => {
      const styleMatch = filters.style === 'all' || shoe.style === filters.style;
      const brandMatch = filters.brand === 'all' || shoe.brand === filters.brand;
      return styleMatch && brandMatch;
    });
  }, [filters]);

  const handleFilterChange = (filterType: 'style' | 'brand') => (value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Men's Collection</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Explore our collection of men's footwear, crafted for style and comfort.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="style-filter">Style</Label>
                <Select onValueChange={handleFilterChange('style')} defaultValue="all">
                  <SelectTrigger id="style-filter" className="w-[160px]">
                    <SelectValue placeholder="Select Style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map(style => (
                      <SelectItem key={style} value={style} className="capitalize">{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="brand-filter">Brand</Label>
                <Select onValueChange={handleFilterChange('brand')} defaultValue="all">
                  <SelectTrigger id="brand-filter" className="w-[160px]">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand} className="capitalize">{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setFilters({ style: 'all', brand: 'all' })}
              className="self-start sm:self-center"
            >
              Clear Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredShoes.map((shoe, index) => (
              <div key={shoe.id} style={{ animationDelay: `${index * 100}ms` }} className="opacity-0 animate-fade-in-up">
                <ShoeCard shoe={shoe} />
              </div>
            ))}
          </div>
           {filteredShoes.length === 0 && (
            <div className="col-span-full text-center py-16">
                <p className="text-lg text-muted-foreground">No shoes match the current filters.</p>
            </div>
           )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
