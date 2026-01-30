import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "./icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-headline text-3xl text-primary">SoleSculpt</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Crafting the future of footwear with style and innovation.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
          <div className="grid gap-2">
            <h3 className="font-semibold">Shop</h3>
            <Link href="/new-arrivals" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              New Arrivals
            </Link>
            <Link href="/men" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Men
            </Link>
            <Link href="/women" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Women
            </Link>
            <Link href="/sale" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Sale
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">About</h3>
            <Link href="/our-story" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Our Story
            </Link>
            <Link href="/careers" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Careers
            </Link>
            <Link href="/press" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Press
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">Support</h3>
            <Link href="/contact" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Contact
            </Link>
            <Link href="/faq" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              FAQ
            </Link>
            <Link href="/shipping-returns" className="text-muted-foreground text-sm hover:text-primary" prefetch={false}>
              Shipping & Returns
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Get the latest updates and special offers.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit" variant="default">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t bg-primary/5">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SoleSculpt. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
