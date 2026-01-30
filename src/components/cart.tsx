'use client';

import { ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { useCartStore } from '@/lib/cart-store';
import { ScrollArea } from './ui/scroll-area';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Input } from './ui/input';

export function Cart() {
    const { items, removeFromCart, updateQuantity } = useCartStore();
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + (item.salePrice ?? item.price) * item.quantity, 0);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {itemCount}
                        </span>
                    )}
                    <span className="sr-only">Shopping Bag ({itemCount} items)</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="px-6">
                    <SheetTitle>Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
                </SheetHeader>
                <Separator />
                {itemCount > 0 ? (
                    <>
                        <ScrollArea className="my-4 flex-1 px-6">
                            <div className="flex flex-col gap-6">
                                {items.map(item => (
                                    <div key={item.id + item.selectedSize} className="flex items-center gap-4">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-md">
                                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-1 flex-col gap-1">
                                            <SheetClose asChild>
                                                <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                                                    {item.name}
                                                </Link>
                                            </SheetClose>
                                            <p className="text-sm text-muted-foreground">
                                                Size: {item.selectedSize}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <p className="font-medium text-sm">
                                                    ${(item.salePrice ?? item.price).toFixed(2)}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}>
                                                        -
                                                    </Button>
                                                    <Input
                                                        type="number"
                                                        value={item.quantity}
                                                        readOnly
                                                        className="h-7 w-10 text-center"
                                                    />
                                                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}>
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id, item.selectedSize)}>
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Remove item</span>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <Separator />
                        <SheetFooter className="px-6 py-4">
                            <div className="w-full space-y-4">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <Button className="w-full">Proceed to Checkout</Button>
                            </div>
                        </SheetFooter>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4">
                        <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                        <p className="text-muted-foreground">Your cart is empty.</p>
                        <SheetClose asChild>
                             <Link href="/new-arrivals">
                                <Button>Continue Shopping</Button>
                            </Link>
                        </SheetClose>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
