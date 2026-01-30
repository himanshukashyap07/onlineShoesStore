'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Shoe } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

const allShoes: Shoe[] = PlaceHolderImages;

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredShoes = useMemo(() => {
    if (!query) {
      return [];
    }
    return allShoes.filter(shoe => {
      const searchContent = `${shoe.name} ${shoe.brand} ${shoe.style} ${shoe.color}`.toLowerCase();
      return searchContent.includes(query.toLowerCase());
    }).slice(0, 10); // Limit results
  }, [query]);
  
  // Add keyboard shortcut (Cmd+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hidden md:inline-flex">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for shoes, brands, or styles..."
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {query && (
          <div className="mt-4 max-h-96 overflow-y-auto">
            {filteredShoes.length > 0 ? (
              <ul className="space-y-2">
                {filteredShoes.map(shoe => (
                  <li key={shoe.id}>
                    <Link
                      href={`/products/${shoe.id}`}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={shoe.imageUrl}
                        alt={shoe.name}
                        width={48}
                        height={48}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <p className="font-semibold">{shoe.name}</p>
                        <p className="text-sm text-muted-foreground">{shoe.brand} - {shoe.color}</p>
                      </div>
                      <div className="ml-auto text-sm font-semibold">
                        ${shoe.salePrice ? shoe.salePrice.toFixed(2) : shoe.price.toFixed(2)}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground py-8">No results found.</p>
            )}
          </div>
        )}
         {!query && (
            <div className="text-center text-muted-foreground py-8">
                <p>Start typing to search for products.</p>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
