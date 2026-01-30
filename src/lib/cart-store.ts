'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Shoe, CartItem } from './types';
import { toast } from '@/hooks/use-toast';

interface CartState {
  items: CartItem[];
  addToCart: (item: Shoe, size: number) => void;
  removeFromCart: (itemId: string, size: number) => void;
  updateQuantity: (itemId: string, size: number, quantity: number) => void;
  clearCart: () => void;
}

// A mock storage implementation for SSR
const mockStorage = {
  getItem: (_key: string): string | null => {
    return null;
  },
  setItem: (_key: string, _value: string): void => {
    // Do nothing
  },
  removeItem: (_key: string): void => {
    // Do nothing
  },
};


export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item, size) => {
        const { items } = get();
        const itemExists = items.find(
          (i) => i.id === item.id && i.selectedSize === size
        );

        if (itemExists) {
          set({
            items: items.map((i) =>
              i.id === item.id && i.selectedSize === size
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1, selectedSize: size }] });
        }
        
        toast({
          title: "Added to cart",
          description: `${item.name} (Size: ${size}) has been added to your cart.`,
        });
      },
      removeFromCart: (itemId, size) => {
        set({
          items: get().items.filter(
            (i) => !(i.id === itemId && i.selectedSize === size)
          ),
        });
        toast({
          title: "Removed from cart",
          description: "Item has been removed from your cart.",
          variant: "destructive",
        });
      },
      updateQuantity: (itemId, size, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId, size);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === itemId && i.selectedSize === size
              ? { ...i, quantity }
              : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => (typeof window !== 'undefined' ? localStorage : mockStorage)),
    }
  )
);
